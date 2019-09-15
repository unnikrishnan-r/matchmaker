var express = require("express");
var path = require('path');
var htmlrouter = express.Router();

// Create all our routes and set up logic within those routes where required.
htmlrouter.get("/", function (req, res) {
    console.log("Home Page");
    res.sendFile(path.join(__dirname, `../public` + '/home.html'));
});

htmlrouter.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, `../public` + '/survey.html'));
});

// Export routes for server.js to use.
module.exports = htmlrouter;