const express = require('express')
const Review = require('../../models/Review')
const Activity = require('../../models/Activity')
const router = express.Router()
const passport = require('passport');
const validateReviewInput = require("../../validations/review")

router.post("/", passport.authenticate("jwt", {session: false}), 
    (req, res) => {

        const {isValid, errors} = validateReviewInput(req.body)
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newReview = new Review({
            user: req.user.id,
            activity: req.body.activity,
            title: req.body.title,
            body: req.body.body,
            ratings: req.body.ratings,
            date: req.body.date
        })

        newReview.save()
        .then(review => res.json(review))
    })


router.get("/:id", (req, res) => {
    Activity.findById(req.params.id)
    .then()
})

module.exports = router;