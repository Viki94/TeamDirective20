/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/index')(data);

    router
        .put('/make-admin', controllers.makeAdmin)
        .put('/toggle-ban-user', controllers.toggleBanUser)
        .put('/get-all-users', controllers.getAllUsers)
        .put('/get-user', controllers.getUserById)
        .put('/edit-profile', controllers.editProfile);

    app.use('/api/users', router);
};