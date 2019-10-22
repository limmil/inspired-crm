const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ~~~~ Contact Schema ~~~~
const ContactSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
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
    }
});

module.exports = Contact = mongoose.model("contacts", ContactSchema);
