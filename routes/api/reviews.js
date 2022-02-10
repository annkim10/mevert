const express = require('express')
const Review = require('../../models/Review')
const User = require('../../models/User')
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


router.get("/", (req, res) => {
    Review.find()
    .then(reviews => res.json(reviews))
})

router.get("/:id", (req, res) => {
    Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.status(400).json(err))
})

router.delete("/:id", (req, res) => {
    Review.findByIdAndDelete(req.params.id)
    .then(() => res.json("hello"))
    .catch(err => res.status(400).json(err))
})

router.patch("/:id", (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => res.json(review))
})

module.exports = router;