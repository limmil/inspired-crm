const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Contact model
const Contact = require("../../models/Contact");
// Load User model
const User = require("../../models/User");

//=================================================================
// @route POST api/contacts/add
// @desc add new contacts
// @access Private
router.post("/add", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // Check validation
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // add one contact
      const newContact = new Contact({
        user: user._id,
        lname: req.body.lname,
        fname: req.body.fname,
        phone: req.body.phone
      });
      newContact
        .save()
        .then(contact => res.json(contact))
        .catch(err => console.log(err));
    } else{
      res.send('Unauthorized');
    }
  });
});
//=================================================================
// @route GET api/contacts/get
// @desc get all contacts from db
// @access Private
router.get("/get", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;

  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // returns all contacts of user  
      Contact
        .find({'user': user._id})
        .exec((err, contacts) => {
            return res.json (contacts);
        })
    } else{
      res.send('Unauthorized');
    }
  });
});
//=================================================================
// @route DELETE api/users/deletecontact
// @desc delete contacts
// @access Private
router.delete("/delete", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // check validation
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // delete one contact
      Contact.deleteOne(
        { _id: req.body.id },
        (err) => {console.log(err)});
      res.send('DONE');
    } else{
      res.send('Unauthorized');
    }
  });
});
//=================================================================
// @route PUT api/users/update
// @desc update contact
// @access Private
router.put("/update", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  const id = req.body.id;
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  // update one contact
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      Contact.findOneAndUpdate({'_id': id},{ 
          '$set': {
          'lname': req.body.lname,
          'fname': req.body.fname,
          'phone': req.body.phone
          }
      }, {useFindAndModify: false})
      .catch(function (err, managerparent) {
        if (err) throw err;
        console.log(managerparent);
      });
      
      res.send('DONE')
    } else{
      res.send('Unauthorized');
    }
  });
});



module.exports = router;