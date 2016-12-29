'use strict';

const router = require('express').Router();

module.exports = function (app, commentData) {
    const controllers = require('../controllers/comment-controller')(commentData);

    router
        .post('/create-comment', controllers.createComment)
        .get('/get-all', controllers.getAll);    

    app.use('/api/comments', router);
};