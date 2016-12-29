/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/auth-controller')(data);

    router
        .post('/login', controllers.login)
        .post('/register', controllers.register)
        .post('/logout', controllers.logout)
        .get('/check-login', controllers.checkLogin);

    app.use('/api/auth', router);
};