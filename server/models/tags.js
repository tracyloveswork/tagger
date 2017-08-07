// Include the Mongoose Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create a Schema for saving Tags. 
const TagSchema = new Schema({
  title: {
    type: String,
    trim: true,
    default: "Your Tag Title",
    required: "Title is required"
  },
  body: {
  	type: String,
    trim: true,
    default: ""
  },
  location : {
        type: [Number],
        index:'2d',
        default: [40.5342783,-74.5224469],
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
    type: Boolean,
    default: true
  }
});

// Create the Model
const Tag = mongoose.model("Tag", TagSchema);

// Export it for use elsewhere
module.exports = Tag;
