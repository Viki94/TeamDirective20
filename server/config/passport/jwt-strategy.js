'use strict';

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    data = require('../../data'),
    User = require('../../data/models/user-model');

let options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeader();
options.secretOrKey = 'secret-as-shit';

let jwtStrategy = new JwtStrategy(options, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.sub }, (err, user) => {
        if (err) {
            return done(err, false);
        }

        if (user) {
            return done(null, user);
        }

        return done(null, false);
    });
});

module.exports = jwtStrategy;