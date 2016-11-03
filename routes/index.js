var Analytics = require('analytics-node');
var analytics = new Analytics('dLGM1pbrDkaTg00AkT97pHlBRrRf2LuW');
var userId = 'f4ca124266';
var userName = "Bob Smith";
var email = "bs@initech.com";
var greeting = "Hola";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  console.log('Seg: track - Viewed index');
  analytics.track({
    userId: userId,
    event: 'Viewed index',
    properties: {
      greeting: greeting
    }
  });

});

module.exports = router;
