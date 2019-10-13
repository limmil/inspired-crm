const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

//=================================================================
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }


  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
//=================================================================
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          /* when it is in production */
          //change keys.secretOrKey to process.env.secretOrKey
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            // hash the token then save it in db
            var hash = bcrypt.hashSync(token,bcrypt.genSaltSync(10))
            user.tokenhash = hash;
            user.save().catch(err => console.log(err));
            res.json({
              success: true,
              tokenhash: hash,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
//=================================================================
// @route POST api/users/addcontact
// @desc add new contacts
// @access Private
router.post("/addcontact", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // contact info
  var newContact = {
    lname: req.body.lname,
    fname: req.body.fname,
    phone: req.body.phone
  };
  // Check validation
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // add one contact
      user.contacts.push(newContact);
      user.save();
      // response with contacts array
      res.send(user.contacts);
    } else{
      res.send('Unauthorized');
    }
  });
});
//=================================================================
// @route POST api/users/deletecontact
// @desc delete contacts
// @access Private
router.post("/deletecontact", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // check validation
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // delete one contact
      user.contacts.pull({_id: req.body.id});
      user.save();
      res.send(user.contacts);
    } else{
      res.send('Unauthorized');
    }
  });
});
//=================================================================
// @route PUT api/users/updatecontact
// @desc update contact
// @access Private
router.put("/updatecontact", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  const contact_id = req.body.id;
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  
  // update one contact
  User.findOneAndUpdate({'email': email,
    'tokenhash': tokenhash,
    'contacts._id': contact_id},{ 
      "$set": {
        "contacts.$.lname": req.body.lname,
        "contacts.$.fname": req.body.fname,
        "contacts.$.phone": req.body.phone
      }
    }, {useFindAndModify: false}
  )
  .catch(function (err, managerparent) {
    if (err) throw err;
    console.log(managerparent);
  });
  // server respon with updated contacts
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      res.send(user.contacts);
    } else{
      res.send('Unauthorized');
    }
  });
});


module.exports = router;
