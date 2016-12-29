'use strict';

module.exports = (models) => {
    var Comment = models.Comment;

    return {
        createComment(factObject) {
            var comment = new Comment(commentObject);

            return new Promise((resolve, reject) => {
                comment.save((err, dbComment) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(dbComment);
                });
            });
        },

        getAll() {
            return new Promise((resolve, reject) => {
                Comment.find({}, (err, comments) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(comments);
                });
            });
        }
    };
};