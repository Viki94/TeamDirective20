/* globals module */

'use strict';

module.exports = (models) => {
    var Campaign = models.Campaign;

    return {
        createCampaign(campaignObject) {
            var campaign = new Campaign(campaignObject);

            return new Promise((resolve, reject) => {
                campaign.save((err, dbCampaign) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(dbCampaign);
                });
            });
        },

        getAllCampaigns() {
            return new Promise((resolve, reject) => {
                Campaign.find({}, (err, campaigns) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(campaigns);
                });
            });
        }
    };
};