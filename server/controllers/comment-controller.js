'use strict';

module.exports = (commentData) => {
    return {
        createComment(req, res) {
            commentData.createComment(req.body)
                .then(() => {
                    res.status(201).json({
                        success: true,
                        message: `Comment ${req.body.content} succesfully created!`
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err
                    });

                    console.log(err);
                });
        },

        getAll(req, res) {
            commentData.getAll()
                .then((comments) => {
                     res.status(200).json(comments);
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err
                    });

                    console.log(err);
                });
        }
    }
};