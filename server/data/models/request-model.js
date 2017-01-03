/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let requestSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    petName: {
        type: String,
        required: true
    },
    petId: {
        type: String,
        required: true
    }
});

mongoose.model('request', requestSchema);
let Request = mongoose.model('request');

module.exports.Request = Request;