var segment = require('./segment');

var express = require('express');
var router = express.Router();

/* GET users listing. */
var pageName = "User Page"
router.get('/', function(req, res, next) {
  res.render('users', { title: pageName });

  segment.track(pageName);

});

module.exports = router;
