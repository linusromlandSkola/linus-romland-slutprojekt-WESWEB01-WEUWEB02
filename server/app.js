//Init of dotenv for use with .env file
require("dotenv").config();

//Dependencies import
const express = require("express");
const app = express();
const fs = require("fs");
const session = require("express-session");
const flash = require("express-flash");
const sessionstore = require("sessionstore");
const passport = require("passport");
const MongoStore = require("connect-mongo");

//Local Dependencies
const database = require("./database.js");
const login = require("./login.js");
const initializePassport = require("./config/passport.js");
const User = require("./models/user.js");
const checkAuthenticated = require("./login.js");

//Variable Init
const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGOURL || "mongodb://localhost:27017/";
let store;

//Connect to Mongo
database.connect("FileUpload", mongoURL);

//Sets the view engine to EJS
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/shared/"));
app.use(flash());
app.use(express.static("client"));
app.use(express.urlencoded({ extended: true }));

//init of passport
app.use(
	session({
		secret: process.env.SECRET || "keyboard cat",
		store: MongoStore.create({
			mongoUrl: mongoURL,
			dbName: "FileUpload",
		}),
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize(undefined));
app.use(passport.session(undefined));

initializePassport(
	passport,
	(name) => User.find((user) => user.name === name),
	(id) => User.find((user) => user.id === id)
);

//Startpage
app.get("/", login.checkNotAuthenticated, (req, res) => {
	res.render("pages/index");
});

//Login Post Request (Needs passport)
app.post(
	"/login",
	checkAuthenticated.checkNotAuthenticated,
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true,
	})
);

//adds the loginroutes to /
app.use("/", require("./routes/loginRoutes"));

//Starts the server
app.listen(port, () =>
	console.log(
		`FileUpload listening on port ${port}!\nAccess the site on http://localhost:${port}`
	)
);
