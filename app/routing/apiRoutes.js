var express = require("express");
var path = require('path');
var apirouter = express.Router();
var friendsData = require("./../data/friends.js")


// Create all our routes and set up logic within those routes where required.
apirouter.get("/api/friends", function (req, res) {
    console.log("Get Friends API");
    res.send(friendsData.friendsData)
});

apirouter.post("/api/friends", function (req, res) {
    console.log("Post Friends API");
    var bestMatch = findClosestMatch(req.body, friendsData.friendsData);
    friendsData.friendsData.push(req.body);
    res.send(bestMatch);
});

function findClosestMatch(newPerson, currentPersonList) {
    var currentPointDiff = 50;
    var closestMatch = {};
    var totalScoreOfNewPerson = calculateScore(newPerson.scores);
    currentPersonList.forEach(person => {
        var totalScoreOfFriend = calculateScore(person.scores);
        console.log(`${person.name} has ${totalScoreOfFriend} ==> ${newPerson.name} has ${totalScoreOfNewPerson}`);
        var calculatedPointDiff = Math.abs(totalScoreOfNewPerson - totalScoreOfFriend);

        if (calculatedPointDiff < currentPointDiff) {
            currentPointDiff = calculatedPointDiff;
            closestMatch = person;
        }
    });
    return {
        name: closestMatch.name,
        photo: closestMatch.photo
    };
};

function calculateScore(scoreArray) {
    var total = 0;
    scoreArray.forEach(score => {
        total += parseInt(score);
    });
    return total;
};


// Export routes for server.js to use.
module.exports = apirouter;