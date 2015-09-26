// Load modules.
var express = require('express'),
    // Create the Express application
    app = express(),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    redis = require('redis'),
    // Connect to the Redis database
    redisClient = redis.createClient(6379, '127.0.0.1');

// Tell Express to use the handlebars engine.
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

// Load middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Add routes.
require('./router.js')(app, redisClient);

// Listen on port 8080.
app.listen(8080);
console.log('Listening on port 8080.');