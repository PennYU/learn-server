var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(db.Users);
  console.log(db.User);
  console.log(db.users);
  console.log(db.user);
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  db.User.findAll({})
  .then(response => {
    res.send(response);
  })
});

module.exports = router;
