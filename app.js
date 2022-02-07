const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use(passport.initialize());
require('./config/passport')(passport);

// app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 8001;



// for calender api 
const { google } = require('googleapis');
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+HaU1D83p6JbE\nXiLIqK1L4weTUejsLZo4h4GKee4YTM3UuUvNiH6c7RlFz6m6xtj08T4DQ2okhu5p\nThGQrWRRo2cg7LUg3OaASZRMRDb57GgLgg1cqc+pTMARDOHXO/VJJeRBJ6jxkD/1\nJd03en03RBZ0ENKHOMDsM2M6GTsZM1zVBkmx8AsxdVhhTL1RiF+Na6bBMxfrmsMt\ne5wVvx6urUXIlkT6jI2T4RVE3MZyXmcP3shApzCwfJMCILNsW0SE+3mvr86nuJsJ\niUFXaKBSIXZeUm0NUbU/4bjiIUh+xG8JH27q9GqvQC0y0fmNCwBbVnPDClwvLGxF\nXyJtM5qnAgMBAAECggEAAjLCKlyM5aB3MgTuiZHBcXfDwG2Q4Ilcvr+jPpzYiQ4m\n4TtJEsu7xRseDbrHgPiipIkmTcUJ/lb8JbG9VnmYpAf+oB7lihiB2K7/jz0Ttc5d\nDE5JEVdDnVSFs62MvEjo3qSfBV7ey9JorQ9lQRSdkFtJWaqJQI6CVNv5jBpxrkmX\nauCmt/f6ClHhm0lmUJkuEPmCdwDp2RE/lUkplVX9vDFoCSPVaihglGDgZYeKw1ok\nt8r/o5HwSqQhIogPfzbGJjLi76iGNjanamKEHhKYzOnfVjjuT0L2Uves76CytBFA\nzrMq0EDhRntyERKyfY4eKnZbO9/D4eCmoW7m/LyLAQKBgQDh053npp+p8pLc2bM/\nV2/RpVQdt4Nizn6EWBFfLDHRCR3YT4BpUXvOhuRpsfvW0nAvl6IqhS5o7GN3H9PX\npZV1QpRiecJPMQdiq37pnhtSnrkSR7kRM+xIzv2u7o+YtODgEASz8h2qtv/d3Ogd\n07bO3mQlUxL0fR7yANM0LXyFpwKBgQDXhIrXZ8/CzAbMdbrbYr+tB2SpbnPNYKaU\nGyNKMfHPgaMkUY8SpFpFOGMrICNqzzZJCp9UL+7NMqJZXOawuPVHX3wRgp1Xe6xS\nzrT6zxbVUA7k+yx8imoVPpm9+pS8FUNMrTwNBiJOMtzy2R9LmjVcOXcIkwSZxMyB\nc/7bz6zjAQKBgQCnp6Lwi0y4MEYGPn2MBg8XFuYHFeouHd3hxTxIaxgk9963a/aK\nuhrvbkf/jErK5vqw6qNTbALTlMQXeYKd8+ms35woK/stLdosz+Nt75qbUQlXX/Yu\nplzChSHjkGr9VTQqRNoo+hQ6XJhDD7EoC7kJhiPVbgKBjq69vg0PDMIIuwKBgHkb\nxlndwGaa+IcU8XgvOb8mFG8R3ole8rzvsxkSj+wn0WGrY1b6fK/BTBkD6mMvJjZN\nfdN1TCCLf6fwCMLubQc6pSHB4GE04lV2S0VV8mLUpkoOy6UAszRVBVg45DP9TuBb\nyQ8Yj1aaRodBc9CsS6gTssxisYcnjDSC1oj3XxQBAoGBAJHAdSsW9wzQlfRrcBI6\nDhc7FbD6FALqIJPRLismh1MScCI4z7xcLGJ5hZI4BaiIWIXjfH1s1KGl1dQQwKBm\nbGi01kUOqZ11qLXeIVKohwrINJ7+en13vDiQnQ+16+6BWrzUJGbKRu+5R8q0CMEw\nxQYpo8PRfpsStCtirfU7WbZO\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = "mevert-service-account@mevert-calender.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "969922612197"
const GOOGLE_CALENDAR_ID = "ktindsqf2r9rqgji60gl1jgebg@group.calendar.google.com"


app.get('/', (req, res) => {
  const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
    );
    
    const calendar = google.calendar({
      version: 'v3',
      project: GOOGLE_PROJECT_NUMBER,
      auth: jwtClient
    });
    
    calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }, (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          res.send(JSON.stringify({ events: result.data.items }));
        } else {
          res.send(JSON.stringify({ message: 'No upcoming events found.' }));
        }
      }
    });
  });
  
  
app.listen(port, () => console.log(`Server is running on port ${port}`));