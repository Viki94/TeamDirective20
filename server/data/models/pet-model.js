'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let petSchema = new Schema({
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

mongoose.model('pet', petSchema);
let Pet = mongoose.model('comment');

module.exports.Pet = Pet;