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
            greeting: greeting,
            sourceDatasets: {
                bytesRead: 2000,
                bytesReadIncremental: 0,
                columnsRead: 10,
                name: "/user/icsuser/testDirectory/accounts.csv",
                rowsRead: 8,
                secureGateway: false,
                type: "db2"
            }
        }
    });
}







exports.page = function(eventName, url) {

    console.log('Segment: track - ' + eventName);
    analytics.page({
        userId: userId,
        type: "page",
        name: eventName,
        properties: {
            url: url,
            sourceDatasets: {
                bytesRead: 2000,
                bytesReadIncremental: 0,
                columnsRead: 10,
                name: "/user/icsuser/testDirectory/accounts.csv",
                rowsRead: 8,
                secureGateway: false,
                type: "db2"
            }
        }
    });
}