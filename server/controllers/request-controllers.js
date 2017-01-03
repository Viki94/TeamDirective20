/* globals module */

'use strict';

module.exports = (data) => {
    return {
        makeAdoptionRequest(req, res) {            
            data.makeRequest(req.body.username, req.body.petId, req.body.petName)
                .then(request => {
                    res.status(201).json(request);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },

        getAllRequests(req, res) {
            data.getAllRequests()
                .then(requests => {
                    res.status(200).json(requests);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        }
    }; 
};