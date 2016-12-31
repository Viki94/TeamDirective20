/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/news-controller')(data);

    router
        .put('/articles', controllers.getAllArticles)
        .post('/add-article', controllers.addArticle);

    app.use('/api/news', router);
};
