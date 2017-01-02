/* globals module */

'use strict';

module.exports = (data) => {
    return {
        getAllArticles(req, res) {
            data.getAllArticles()
                .then(articles => {
                    res.status(200).json(articles);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },
        addArticle(req, res) {
            let article = req.body;
            data.addArticle(article)
                .then(article => {
                    res.status(201).json(article);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },
        getArticleById(req, res) {
            data.getArticleById(req.body._id)
                .then(article => {
                    res.status(200).json(article);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },
        toggleLike(req, res) {
            let username = req.body.username,
                articleId = req.body.articleId;

            data.toggleLikeArticle(articleId, username)
                .then(result => {
                    res.status(201).json(result);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        }
    };
};