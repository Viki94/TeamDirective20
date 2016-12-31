/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: String,
    author: String,
    content: String,
    imgUrl: String,
    likes: [String],
    comments: [{
        author: String,
        createdOn: {
            type: Date,
            default: Date.now
        },
        isDeleted: Boolean,
        content: String
    }],
    createdOn: {
        type: Date,
        default: Date.now
    },
    isDeleted: Boolean
});

mongoose.model('article', articleSchema);
let Article = mongoose.model('article');

module.exports.Article = Article;