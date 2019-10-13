const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ~~~~ Contact Schema ~~~~
const ContactSchema = new Schema({
  lname: {
      type: String
    },
    fname: {
      type: String
    },
    phone: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
});

// ================== Create Schema ==================
const UserSchema = new Schema({
  tokenhash: {
    type: String
  },
  // user logins
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // contacts data array
  contacts: [ContactSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
