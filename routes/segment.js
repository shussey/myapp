var Analytics = require('analytics-node');
var analytics = new Analytics('dLGM1pbrDkaTg00AkT97pHlBRrRf2LuW');
var userId = 'f4ca124266';
var userName = "Bob Smith";
var email = "bs@initech.com";
var greeting = "Hola";

exports.identify = function() {

  console.log('Seg: Indentify');
  analytics.identify({
    userId: userId,
    traits: {
      name: userName,
      email: email,
      createdAt: new Date('2016-06-14T02:00:19.467Z')
    }
  });
}

exports.track = function(eventName) {

  console.log('Segment: track - ' + eventName);
  analytics.track({
    userId: userId,
    event: eventName,
    properties: {
      greeting: greeting
    }
  });
}

exports.page = function(eventName,url) {

  console.log('Segment: track - ' + eventName);
  analytics.page({
    userId: userId,
    type: "page",
    name: eventName,
    properties: {
      url: url
    }
  });
}
