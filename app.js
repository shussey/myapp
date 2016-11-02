var Analytics = require('analytics-node');
var analytics = new Analytics('dLGM1pbrDkaTg00AkT97pHlBRrRf2LuW');
var userId = 'f4ca124296';
var userName = "Joe Smith";
var email = "js@initech.com";
var greeting = "Hola";


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

analytics.identify({
  userId: userId,
  traits: {
    name: userName,
    email: email,
    createdAt: new Date('2016-06-14T02:00:19.467Z')
  }
});

analytics.track({
  userId: userId,
  event: 'Viewed Greeting',
  properties: {
    greeting: greeting
  }
});

module.exports = app;
