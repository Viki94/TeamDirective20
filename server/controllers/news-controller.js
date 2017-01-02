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
        },
        postComment(req, res) {
            let articleId = req.body.articleId,
                username = req.body.username,
                content = req.body.content;

            data.commentArticle(articleId, username, content)
                .then(result => {
                    res.status(201).json(result);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },
        getArticlesByPage(req, res) {
            const page = +req.params.page || 1;
            let totalPagesCount;
            let pageSize = 8;

            data.getArticlesByPage(page)
                .then(articleObj => {
                    totalPagesCount = Math.ceil(articleObj.count / pageSize);
                    res.status(200).json({
                        totalPagesCount,
                        articles: articleObj.articles
                    });
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        },
        removeArticle(req, res) {
            let articleId = req.body.id;
            data.removeArticle(articleId)
                .then(article => {
                    res.status(200).json(article);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        },
        restoreArticle(req, res) {
            let articleId = req.body.id;
            data.restoreArticle(articleId)
                .then(article => {
                    res.status(200).json(article);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        }
    };
};