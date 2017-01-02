/* globals module */

'use strict';

module.exports = (models) => {
    var Article = models.Article;

    return {
        addArticle(article) {
            article.likes = [];
            article.comments = [];

            let articleModel = new Article(article);
            return new Promise((resolve, reject) => {
                articleModel.save((err, dbArticle) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(dbArticle);
                });
            });
        },

        getAllArticles() {
            return new Promise((resolve, reject) => {
                Article.find({}, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(res);
                });
            });
        },

        getArticleById(articleId) {
            return new Promise((resolve, reject) => {
                Article.find({ _id: articleId }, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(res);
                });
            });
        },

        toggleLikeArticle(articleId, username) {
            return new Promise((resolve, reject) => {
                Article.findOne({ _id: articleId }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    if (article.likes.includes(username)) {
                        let index = article.likes.indexOf(username);
                        article.likes.splice(index, 1);
                    } else {
                        article.likes.push(username);
                    }

                    article.save((error, result) => {
                        if (error) {
                            return reject(error);
                        }

                        return resolve(result);
                    });
                });
            });
        },

        commentArticle(articleId, username, content) {
            return new Promise((resolve, reject) => {
                Article.findOne({ _id: articleId }, (err, article) => {
                    if (!article) {
                        return reject(err);
                    }

                    let comment = {
                        author: username,
                        content
                    };
                    article.comments.push(comment);

                    article.save((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    });
                });
            });
        }
    };
};