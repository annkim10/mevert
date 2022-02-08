const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const mongodb = require('mongodb')

router.post("/results", (req, res) => {
    let userId = new mongodb.ObjectID(req.body.userId) 
    User.findOne({ "_id": userId}).then( user => {
        if (!user) {
           res.status(400).send("User is not found");
        } else {
            user.quiz = req.body.quiz
            user.updateOne();
            res.json({quiz: user.quiz})
        }
    });
})


module.exports = router;





