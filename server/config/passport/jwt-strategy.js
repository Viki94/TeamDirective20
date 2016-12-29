/* globals module require */

'use strict';

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    data = require('../../data');

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeader();
options.secretOrKey = 'secret-as-shit';

let jwtStrategy = new JwtStrategy(options, (jwt_payload, done) => {
    data.findUserById(jwt_payload._doc._id)
        .then(user => {
            if (user) {
                return done(null, user);
            }

            return done(null, false);
        })
        .catch(err => done(err, false));
});

module.exports = jwtStrategy;