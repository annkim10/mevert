const express = require('express')
const Activity = require('../../models/Activity')
const router = express.Router()


router.get("/", (req, res) => {
    Activity.find()
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json(err))
})

router.get("/:id", (req, res) => {
    Activity.findById(req.params.id)
    .then(activity => res.json(activity))
    .catch(err => res.status(400).json(err))
})


module.exports = router;