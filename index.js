// Imports modules
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Create a new app instance
const app = express();

// Use passport and google strategy
passport.use(new GoogleStrategy());

// Dynamic port
const PORT = process.env.PORT || 5000;

// 
app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT);
});