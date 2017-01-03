/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/index')(data);

    router
        .post('/add-pet', controllers.addPet)
        .put('/get-by-page/:page', controllers.getPetsByPage)
        .put('/get-pet', controllers.getPetById)
        .put('/add-photo', controllers.addPhotoToPet);

    app.use('/api/pets', router);
};