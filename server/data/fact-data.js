/* globals module */

'use strict';

module.exports = (models) => {
    var Fact = models.Fact;
    var User = models.User;

    return {
        createFact(factObject) {
            var fact = new Fact(factObject);

            return new Promise((resolve, reject) => {
                fact.save((err, dbFact) => {
                    if (err) {
                        return reject(err);
                    }

                    User.findOne({ username: fact.addedBy }, (err) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(dbFact);
                    });
                });
            });
        },

        getAllFacts() {
            return new Promise((resolve, reject) => {
                Fact.find({}, (err, facts) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(facts);
                });
            });
        }
    };
};