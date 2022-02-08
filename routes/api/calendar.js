const express = require('express')
const Calendar = require('../../models/Calendar')
const router = express.Router()
const passport = require('passport');
const validateCalendarInput = require('../../validations/calendar');

router.get("/", (req, res) => {
    Calendar.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json(err))
});


router.get('/user/:user_id', (req, res) => {
    Calendar 
        .find({ event: req.params.user_id })
        .then(events => res.json(events))
        .catch(err => res.status(400).json(err))
});

router.get('/:id', (req, res) => {
    Calendar 
        .findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json(err))
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCalendarInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newEvent = new Calendar({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        user: req.user.id
      });
  
      newEvent.save().then(event => res.json(event));
    }
  );

module.exports = router;