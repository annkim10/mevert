const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require("../../validations/login")
const passport = require('passport');


// REGISTER ROUTE

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, email: user.email };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// LOGIN ROUTE

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, activities: user.activities };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// CURRENT ROUTE

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    activities: req.user.activities
  });
})

// POST USER ACTIVITY

router.post("/:id/activities", (req, res) => {
  console.log("router post")
   User.findOne({ "_id": req.params.id }).then( user => {
        if (!user) {
           res.status(400).send("User is not found");
        } else if (user && user.activities.includes(req.body.activityId)) {
           res.status(400).send("Activity already added");
        } else {
            user.activities.push(req.body.activityId)
            user.save()
            res.json(user.activities)
        }
    });
  
}); 

//DELETE USER ACTIVITES 


router.delete("/:id/activities", (req, res) => {
  console.log("router post")
   User.findOne({ "_id": req.params.id })
   .then( user => {
        if (!user) {
           res.status(400).send("User is not found");
        } else {
            let i = user.activities.indexOf(req.body.activityId)
            user.activities.splice(i,1)
            user.save()
            res.json(user)
        }
    });
  
}); 

// FETCH USER ACTIVITIES

router.get("/:userId/activities", (req, res) => {

   User.findOne({ "_id": req.params.userId }).then( user => {
        if (!user) {
           res.status(400).send("User is not found");
        } else {
            res.json(user.activities)
        }
    });
  
}); 


module.exports = router;