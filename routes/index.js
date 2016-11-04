var segment = require('./segment');
var express = require('express');
var router = express.Router();
/* GET home page. */


exports.index = router.get('/', function(req, res){
  var pageName = "Main Page"
  res.render('index', { title: pageName });
  //segment.track(pageName);
  segment.page(pageName);
});

exports.users = router.get('/users', function(req, res){
  var pageName = "User Page"
  res.render('users', { title: pageName });
  //segment.track(pageName);
  segment.page(pageName);
});

exports.logon = router.get('/logon', function(req, res){
  var pageName = "Logon Page"
  res.render('logon', { title: pageName });
  //segment.track(pageName);
  segment.page(pageName);
});
