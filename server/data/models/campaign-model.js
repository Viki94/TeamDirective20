/* globals module require */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let campaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ownerName: {
        type: String
    },
    ownerContact: {
        type: String,
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
    image: {
        type: String
    }
});

mongoose.model('campaign', campaignSchema);
let Campaign = mongoose.model('campaign');

module.exports.Campaign = Campaign;