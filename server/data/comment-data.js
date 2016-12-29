'use strict';

module.exports = (models) => {
    var Comment = models.Comment;

    return {
        createComment(commentObject) {
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

        getAllComments() {
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