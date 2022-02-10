const express = require('express')
const Event = require('../../models/Event')
const router = express.Router()
const passport = require('passport');
const mongoose = require('mongoose');

// const moment = require('moment');

router.get("/events", (req, res) => {
    Event
        .find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json(err))
});

router.get('/user/:user_id', (req, res) => {
    Event 
        .find({ event: req.params.user_id })
        .then(events => res.json(events))
        .catch(err => res.status(400).json(err))
});

router.get('/:id', (req, res) => {
    Event 
        .findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json(err))
});

router.post('/createEvent',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newEvent = new Event({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        user: req.user.id
      });
      newEvent.save().then(event => res.json(event));
    }
);

router.patch('/update/:id', (req, res) => {
  if( !mongoose.Types.ObjectId.isValid(req.params.id) ) return false;

  Event.findByIdAndUpdate(req.params.id, req.body)
  .then(event => res.json(event)) 
  .catch(err => res.status(400).json('Error: '+ err));
});

router.delete('/:id', (req,res) => {
  Event.findByIdAndDelete(req.params.id)
  .then(event => res.json('Event deleted'))
  .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;