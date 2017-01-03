/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let petSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 25
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    pictures: {
        type: [String]
    },
    addedOn: {
        type: Date,
        default: Date.now
    },
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
    about: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 5000
    },
    isAdopted: Boolean,
    breed: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    addedBy: String,
    isDeleted: Boolean
});

mongoose.model('pet', petSchema);
let Pet = mongoose.model('pet');

module.exports.Pet = Pet;