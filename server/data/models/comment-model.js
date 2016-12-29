'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let commentSchema = new Schema({
    creator: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

mongoose.model('comment', commentSchema);
let Comment = mongoose.model('comment');

module.exports.Comment = Comment;