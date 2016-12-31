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
        }
    };
};