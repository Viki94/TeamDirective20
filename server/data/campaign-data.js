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
        },

        getById(id) {
            return new Promise((resolve, reject) => {
                Campaign.findOne({ _id: id }, (err, campaign) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(campaign);
                });
            });
        },

        editCampaign(campaign) {
            return new Promise((resolve, reject) => {
                Campaign.update({ _id: campaign._id }, campaign, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(campaign);
                });
            });
        }
    };
};