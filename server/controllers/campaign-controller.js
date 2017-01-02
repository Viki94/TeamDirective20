/* globals module*/

'use strict';

module.exports = (campaignData) => {
    return {
        createCampaign(req, res) {
            if (req.body) {
                campaignData.createCampaign(req.body)
                    .then(() => {
                        res.status(201).json({
                            success: true,
                            message: `Campaign ${req.body.name} succesfully created!`
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({
                            success: false,
                            message: err
                        });

                        console.log(err);
                    });
            }
        },

        getAllCampaigns(req, res) {
            campaignData.getAllCampaigns()
                .then((campaigns) => {
                    res.status(200).json(campaigns);
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err
                    });

                    console.log(err);
                });
        },

        getById(req, res) {
            campaignData.getById(req.params.id)
                .then((campaign) => {
                    res.status(200).json(campaign);
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err
                    });

                    console.log(err);
                });
        },

        editCampaign(req, res) {
            if (req.body) {
                campaignData.editCampaign(req.body)
                    .then(() => {
                        res.status(201).json({
                            success: true,
                            message: `Campaign ${req.body} succesfully edited!`
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({
                            success: false,
                            message: err
                        });

                        console.log(err);
                    });
            }
        }
    };
};