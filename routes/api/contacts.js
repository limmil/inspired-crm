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
// @req: email, tokenhash, lname, fname, phone
// @res: {_id, user, lname, fname, phone, date} OR 401
router.post("/add", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // Check validation
  const email = req.body.email.toLowerCase();
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
        .catch(err => {
          console.log(err); 
          res.status(500);
        });
    } else{
      res.status(401).send('Unauthorized');
    }
  });
});
//=================================================================
// @route POST api/contacts/get
// @desc get all contacts from db
// @access Private
// @req: email, tokenhash
// @res: [{_id, user, lname, fname, phone, date}] OR 401
router.post("/get", 
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
      res.status(401).send('Unauthorized');
    }
  }).catch(err => {
      console.log(err);
      res.status(500);
    });
});
//=================================================================
// @route DELETE api/users/deletecontact
// @desc delete contacts
// @access Private
// @req: email, tokenhash, id
// @res: 'DELETED' OR 401
router.delete("/delete", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // check validation
  const email = req.body.email.toLowerCase();
  const tokenhash = req.body.tokenhash;
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // delete one contact
      Contact.deleteOne(
        { _id: req.body.id },
        (err) => {console.log(err)})
          .then(res.status(200).send('DELETED'));
    } else{
      res.status(401).send('Unauthorized');
    }
  }).catch(err => {
      console.log(err); 
      res.status(500);
    });
});
//=================================================================
// @route PUT api/users/update
// @desc update contact
// @access Private
// @req: email, tokenhash, id, lname, fname, phone
// @res: 'UPDATED' OR 401
router.put("/update", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  const id = req.body.id;
  const email = req.body.email.toLowerCase();
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
      .then(res.status(200).send('UPDATED'))
      .catch(function (err, managerparent) {
        if (err) throw err;
        console.log(managerparent);
        res.status(500);
      });
    } else{
      res.status(401).send('Unauthorized');
    }
  });
});



module.exports = router;
