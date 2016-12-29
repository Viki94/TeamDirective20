/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let factSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
});

mongoose.model('fact', factSchema);
let Fact = mongoose.model('fact');

module.exports.Fact = Fact;