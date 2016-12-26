'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/auth-controller')(data);

    router
        .post('/login', controllers.login)
        .post('/register', controllers.register)
        .post('/logout', controllers.logout)
        .get('/get-user-info', controllers.getUserInfo);

    app.use('/api/auth', router);
};