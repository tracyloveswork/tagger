
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(router) {

// Main "/" Route. This will redirect the user to our rendered React application
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/build/static/index.html");
});


// Route to see ALL tags we have added that are public and belonging to the user
router.get("/tags", function(req, res) {
  // Find all notes in the tag collection with our Tag model
  Tag.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.json(error);
    }
    // Or send the doc to the browser
    else {
      res.json(allTags);
    }
  });
});

// New Tag creation via POST route
router.post('/submit', (req, res) => {
// A new tag with default values is saved to the database 
  const newTag = new Tag();

  newTag.save((err, savedTag) => {
    if (err) return res.json(err)
    return res.json(savedTag)
  });
});


    // Add when authentication is working
    // else {
      // Find our user and push the new tag id into the User's notes array
      // User.findOneAndUpdate({}, { $push: { "tags": doc._id } }, { new: true }, function(err, newdoc) {
      //   // Send any errors to the browser
      //   if (err) {
      //     res.json(err);
      //   }
      //   // Or send the newdoc to the browser
      //   else {
          // res.json(newdoc);
      //   }
      // });


// This is the route we will send POST requests to update
router.post("/update", function(req, res) {

  var tagID = req.body.id;
  // var key = parseInt(req.body.key);

 
  Tag.findOneAndUpdate({
    _id: tagID
  }, {
    $set: req.body
  }, { upsert: true }).exec(function(err) {

    if (err) {
      console.log(err);
    }
  });
});

// Delete Note

router.delete("/update/:id", function(req, res) {

  console.log ("Delete ID: " + req.params.id);

  // var tagID = req.body.tagID;

   Tag.findByIdAndRemove(req.params.id, function (err, response) {
    if(err){
      res.json("Delete error: " + err);
    }
    res.json(response);
  });

});


};
// -------------------------------------------------

