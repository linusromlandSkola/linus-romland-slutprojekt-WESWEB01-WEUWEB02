//Init of dotenv for use with .env file
require('dotenv').config();

//Dependencies import
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

//Sets the view engine to EJS
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/shared/"))

//Startpage
app.get("/", (req, res) => {
    res.render("pages/index");
});

app.use('/', require('./routes/loginRoutes'));


//Starts the server
app.listen(port, () => console.log(`FileUpload listening on port ${port}!`))