//Init of dotenv for use with .env file
require('dotenv').config();

//Dependencies import
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

//Sets the view engine to EJS
app.set("view engine", "ejs");

//GET ROUTES
app.get("/", (req, res) => {
    res.render("pages/index");
});

//Starts the server
app.listen(port, () => console.log(`FileUpload listening on port ${port}!`))