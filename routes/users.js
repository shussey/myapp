var Analytics = require('analytics-node');
var analytics = new Analytics('dLGM1pbrDkaTg00AkT97pHlBRrRf2LuW');
var userId = 'f4ca124266';
var userName = "Bob Smith";
var email = "bs@initech.com";
var greeting = "Hola";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'User page' });
});

analytics.track({
  userId: userId,
  event: 'Viewed users',
  properties: {
    greeting: greeting
  }
});


module.exports = router;
