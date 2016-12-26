'use strict';

const fs = require('fs'),
    path = require('path'),
    passport = require('passport');

module.exports = (app, data) => {
    passport.serializeUser((user, done) => {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser((userId, done) => {
        data
            .findUserById(userId)
            .then(user => done(null, user || false))
            .catch(error => done(error, false));
    });
    
    fs.readdirSync('./server/config/passport')
        .filter(x => x.includes('-strategy'))
        .forEach(strategy => passport.use(require(path.join(__dirname, strategy))));

    app.use(passport.initialize());
    app.use(passport.session());
};