const express = require('express')
const Event = require('../../models/Event')
const router = express.Router()
const passport = require('passport');
const validateCalendarInput = require('../../validations/calendar');
const moment = require('moment');

router.get("/events", (req, res) => {
    // const events = Event.find({
    //   start: {$gte: moment(req.query.start).toDate()},
    //   end: { $lte: moment(req.query.end).toDate() }
    // });

    // req.setEncoding(events);
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
      const { errors, isValid } = validateCalendarInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newEvent = new Event({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        user: req.user.id
      });
  
      newEvent.save().then(event => res.json(event));
    }

    // async(req, res) => {
    //   const event = Event(req.body);
    //   await event.save();
    //   req.sendStatus(201);
    // }
  );

module.exports = router;