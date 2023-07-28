const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/key");
const mongoose = require("mongoose");

//Import schema
const User = mongoose.model("users");

passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser((id, done)=>{
  User.findById(id)
    .then(user=>{
      done(null, user);
    });
});
// Use passport and google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token " + accessToken);
      console.log("refresh token " + refreshToken);
      console.log("profile ", profile);

      // Adding new user
      User.findOne({ googleID: profile.id }).then((existingUser) => {
        if (existingUser) {
          // We don't have any record with given profile ID
          done(null, existingUser);
        } else {
          // Make a new record
          new User({
            googleID: profile.id,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
