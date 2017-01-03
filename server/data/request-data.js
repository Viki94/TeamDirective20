/* globals module */

'use strict';

module.exports = (models) => {
    let Request = models.Request;

    return {
        makeRequest(username, petName, petId) {
            return new Promise((resolve, reject) => {
                let request = {
                    username,
                    petName,
                    petId
                };

                let dbReq = new Request(request);

                dbReq.save((err, req) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(req);
                });
            });
        },

        getAllRequests() {
            return new Promise((resolve, reject) => {
                Request.find({}, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(res);
                });
            });
        }
    };
};