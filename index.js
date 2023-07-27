// Imports modules
const express = require("express");
const mongoose = require("mongoose");

require("./services/passport");
const keys = require("./config/key");

// Connect to MongoDB
mongoose.connect(keys.mongoURI);

// Create a new app instance
const app = express();

require("./routes/authRoute")(app);




// Dynamic port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
