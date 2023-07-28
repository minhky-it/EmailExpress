// Imports modules
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require('./models/Users');
require("./services/passport");
const keys = require("./config/key");

// Connect to MongoDB
mongoose.connect(keys.mongoURI);

// Create a new app instance
const app = express();
// Enabling cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoute")(app);




// Dynamic port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
