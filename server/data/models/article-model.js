/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 20000
    },
    imgUrl: {
        type: String,
        required: true
    },
    likes: [String],
    comments: [{
        author: {
            type: String,
            required: true
        },
        createdOn: {
            type: Date,
            default: Date.now
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 500
        }
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