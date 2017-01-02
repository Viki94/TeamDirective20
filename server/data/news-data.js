/* globals module */

'use strict';

module.exports = (models) => {
    let Article = models.Article,
        User = models.User;

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

                    User.findOne({ username: dbArticle.author }, (err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        user.addedArticles.push({
                            name: dbArticle.title,
                            imgUrl: dbArticle.imgUrl,
                            addedOn: dbArticle.createdOn,
                            id: dbArticle._id,
                            isDeleted: dbArticle.isDeleted
                        });
                        console.log(user);
                        user.save((err, res) => {
                            console.log(res);
                            return reject(err);
                        });
                    });

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

        getArticlesByPage(page) {
            page = page || 1;
            const pageSize = 8;

            return new Promise((resolve, reject) => {
                Article.find({ isDeleted: false })
                    .skip((page - 1) * pageSize)
                    .sort({ 'createdOn': -1 })
                    .limit(pageSize)
                    .exec((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        Article.count({ isDeleted: false }, (err, count) => {
                            if (err) {
                                return reject(err);
                            }

                            let result = {
                                articles: res,
                                count
                            };

                            return resolve(result);
                        });
                    });
            });
        },

        removeArticle(articleId) {
            return new Promise((resolve, reject) => {
                Article.findOne({ _id: articleId }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    article.isDeleted = true;
                    article.save((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    });
                });
            });
        },

        restoreArticle(articleId) {
            return new Promise((resolve, reject) => {
                Article.findOne({ _id: articleId }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    article.isDeleted = false;
                    article.save((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    });
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