// Imports modules
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require('./models/User');
require('./models/Survey');
require("./services/passport");
const bodyParser = require('body-parser');
const keys = require("./config/key");

// Connect to MongoDB
mongoose.connect(keys.mongoURI);

// Create a new app instance
const app = express();
// Middleware
app.use(bodyParser.json());

// Enabling cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if(process.env.NODE_ENV === 'production'){
  // Express will serve up production access
  // Like our main.js / main.css file!
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

// Dynamic port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
