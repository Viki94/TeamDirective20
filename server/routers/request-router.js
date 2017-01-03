/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/index')(data);

    router
        .post('/make-request', controllers.makeAdoptionRequest)
        .put('/get-all', controllers.getAllRequests);

    app.use('/api/requests', router);
};