const express = require('express'),
    expressSession = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    path = require('path');

let app = express();
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'directive20',
    resave: true,
    saveUninitialized: true
}));

module.exports = app;