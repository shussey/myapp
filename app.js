// web server
var express = require('express');
// working with file and directory paths like path.join
var path = require('path');

// module for serving up the site/page identifying icon favicon.ico
var favicon = require('serve-favicon');

// HTTP request logger middleware
var logger = require('morgan');

// Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
var cookieParser = require('cookie-parser');

// Parse incoming request bodies in a middleware before your handlers
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

//---------------------------------------

// view engine setup
// __dirname is the name of the directory that the currently executing script resides in
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(express.static(__dirname + '/assets'));
//app.configure('development', function () { app.locals.pretty = true; });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// middleware morgan logger with dev format ":method :url :status :response-time ms - :res[content-length]"
app.use(logger('dev'));

// use middleware body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use middleware cookie parser
app.use(cookieParser());

// middleware that comes with express to serve up static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes.index);
app.use('/users', routes.users);
app.use('/logon', routes.logon);


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

module.exports = app;
