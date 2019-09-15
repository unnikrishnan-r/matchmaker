var express = require("express");
var path = require('path');
var apirouter = express.Router();
var friendsData = require("./../data/friends.js")


// Create all our routes and set up logic within those routes where required.
apirouter.get("/api/friends", function (req, res) {
    console.log("Get Friends API");
});

apirouter.post("/api/friends", function (req, res) {
    console.log("Post Friends API");
    console.log(req.body)
    console.log(friendsData.friendsData[0].scores);
});



// Export routes for server.js to use.
module.exports = apirouter;