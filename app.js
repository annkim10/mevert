const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const quiz = require("./routes/api/quizzes")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const activities = require("./routes/api/activities")
const calendar = require('./routes/api/calendar')
const review = require("./routes/api/reviews")
const path = require('path');
const morgan = require("morgan-body")


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

morgan(app)

app.use("/api/users", users);
app.use("/api/quiz", quiz)
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/activities", activities)
app.use("/api/calendar", calendar)
app.use("/api/reviews", review)

// app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 8001;



app.listen(port, () => console.log(`Server is running on port ${port}`));