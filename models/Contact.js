const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ~~~~ Contact Schema ~~~~
const ContactSchema = new Schema({
  // User's contact information.
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  lname: {
    type: String
  },
  fname: {
    type: String
  },
  phone: {
    type: String
  },
  emailaddr: {
    type: String
  },
  temp: {
    type: String
  },
  lastreachout: {
    type: String
  },
  notes: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },

  // Contact classification for pipeline.
  notcontacted: {
    type: String
  },
  contacted: {
    type: String
  },
  allinfosent: {
    type: String
  },
  needsfollowedup: {
    type: String
  },
  followedup: {
    type: String
  },
  closedsigned: {
    type: String
  },
  notrightnow: {
    type: String
  }
});

module.exports = Contact = mongoose.model("contacts", ContactSchema);
