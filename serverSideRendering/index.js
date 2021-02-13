const Vue = require('vue');
const server = require('express')();
const createApp = require("./Home/main.js")

server.get('*', (req, res) => {

})

server.listen(8080);
