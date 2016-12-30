/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/index')(data);

    router
        .put('/get-user', controllers.getAllUsers)
        .put('/edit-profile', controllers.editProfile);

    app.use('/api/users', router);
};