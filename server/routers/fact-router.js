/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, factData) {
    const controllers = require('../controllers/fact-controller')(factData);

    router
        .post('/create-fact', controllers.createFact)
        .get('/get-all-facts', controllers.getAllFacts);    

    app.use('/api/facts', router);
};