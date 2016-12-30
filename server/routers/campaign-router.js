/* globals module require */

'use strict';

const router = require('express').Router();

module.exports = function (app, campaignData) {
    const controllers = require('../controllers/campaign-controller')(campaignData);

    router
        .post('/create-campaign', controllers.createCampaign)
        .get('/get-all-campaigns', controllers.getAllCampaigns);    

    app.use('/api/campaigns', router);
};