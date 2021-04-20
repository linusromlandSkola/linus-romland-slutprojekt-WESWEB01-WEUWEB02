require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

//GET ROUTES
app.get("/", (req, res) => {
    res.render("pages/index");
});

app.listen(port, () => console.log(`FileUpload listening on port ${port}!`))