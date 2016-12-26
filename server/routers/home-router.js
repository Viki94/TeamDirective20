'use strict';

const router = require('express').Router(),
    path = require('path'),
    passport = require('passport');

module.exports = function (app, data) {
    router
        .get('/', function (req, res) {
            res.status(200).sendFile(path.join(__dirname, '../../dist/index.html'));
        })
        .get('*', (req, res) => {
            res.status(200).sendFile(path.join(__dirname, '../../dist/index.html'));
        })
        .get('/jwt-test', passport.authenticate('jwt'), (req, res) => {
            res.send('wa wa');
        });
    app.use(router);
};