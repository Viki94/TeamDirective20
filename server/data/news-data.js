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
        }
    };
};