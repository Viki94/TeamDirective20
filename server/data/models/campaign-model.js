/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let campaignSchema = new Schema({
    name: {
        type: String,
        minlength: 6,
        maxlength: 30,
        required: true
    },
    description: {
        type: String,
        minlength: 20,
        maxlength: 500,
        required: true
    },
    ownerName: {
        type: String
    },
    ownerContact: {
        type: String,
        minlength: 6,
        maxlength: 20,
        required: true
    },
    creatorId: {
        type: String
    },
    neededAmount: {
        type: Number
    },
    currentAmount: {
        type: Number
    },
    iban: {
        type: String
    },
    image: {
        type: String
    }
});

mongoose.model('campaign', campaignSchema);
let Campaign = mongoose.model('campaign');

module.exports.Campaign = Campaign;