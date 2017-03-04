var segment = require('./segment');
var express = require('express');
var router = express.Router();
/* GET home page. */


exports.index = router.get('/', function(req, res) {
    var pageName = "A Main Page"
        //segment.page(pageName,'/');
    res.render('index', { title: pageName });
    segment.track(pageName);

});

exports.users = router.get('/users', function(req, res) {
    var pageName = "A User Page"
        //segment.page(pageName,'/users');
    res.render('users', { title: pageName });
    segment.track(pageName);

});

exports.logon = router.get('/logon', function(req, res) {
    var pageName = "A Logon Page"
        //segment.page(pageName,'/logon');
    res.render('logon', { title: pageName });
    segment.track(pageName);

});