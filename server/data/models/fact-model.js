/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let factSchema = new Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    description: {
        type: String,
        minlength: 20,
        maxlength: 500,
        required: true
    },
    img: {
        type: String
    },
    addedBy: String
});

mongoose.model('fact', factSchema);
let Fact = mongoose.model('fact');

module.exports.Fact = Fact;