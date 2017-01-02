'use strict';

const router = require('express').Router();

module.exports = function (app, petData) {
    const controllers = require('../controllers/pet-controller')(petData);

    router
        .post('/create-comment', controllers.createPet)
        .put('/get-all',controllers.getAllPets)
        .put('/:id', controllers.getPetById)    

    app.use('/api/pets', router);
};