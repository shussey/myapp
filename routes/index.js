var segment = require('./segment');

var express = require('express');
var router = express.Router();

/* GET home page. */
var pageName = "Main Page"
router.get('/', function(req, res, next) {
  res.render('index', { title: pageName });

  segment.track(pageName);

});

module.exports = router;
