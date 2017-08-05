// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for saving Tags. 
var TagSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  body: {
  	type: String,
    trim: true
  },
  location : {
        type: [Number],
        index:'2d',
        required: "Location is needed"
    },
    userCreated: {
    	type: Date,
    default: Date.now
    },
    expires: {
    	type: Number,
    	default: -1
    },
  public: {
    type: Boolean
  }
});

// Create the Model
const Tag = mongoose.model("Tag", TagSchema);

// Export it for use elsewhere
module.exports = Tag;
