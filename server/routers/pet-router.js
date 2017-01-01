'use strict';

const router = require('express').Router();

module.exports = function (app, petData) {
    const controllers = require('../controllers/pet-controller')(petData);

    router
        .post('/create-comment', controllers.createPet)
        .get('/get-all', controllers.getAllPets);    

    app.use('/api/comments', router);
};