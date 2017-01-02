/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, data) {
    const controllers = require('../controllers/news-controller')(data);

    router
        .put('/articles', controllers.getAllArticles)
        .put('/get-article', controllers.getArticleById)
        .put('/toggle-like', controllers.toggleLike)
        .post('/post-comment', controllers.postComment)
        .put('/get-by-page/:page', controllers.getArticlesByPage)
        .post('/add-article', controllers.addArticle)
        .put('/remove-article', controllers.removeArticle)
        .put('/restore-article', controllers.restoreArticle);

    app.use('/api/news', router);
};
