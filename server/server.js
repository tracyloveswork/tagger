// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Mongoose schemas
var Tag = require("./models/tag");
var User = require("./models/user");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("build"));

// -------------------------------------------------

// MongoDB configuration 

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost/tagger') // local mongo url
}

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  console.log('YOU ARE IN THE PRODUCTION ENV')
  app.use('/static', express.static(path.join(__dirname, '../build/static')))
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/'))
  })
}

// -------------------------------------------------

// Routes
// =============================================================
require("./controller/apiRoutes.js")(app);


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
