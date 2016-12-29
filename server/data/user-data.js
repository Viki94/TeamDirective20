/* globals module require */

'use strict';

const encryptor = require('../utils/encryptor');

module.exports = (models) => {
    var User = models.User;

    return {
        createUser(username, password, firstName, lastName, email, age, gender, profilePicture) {
            let salt = encryptor.generateSalt(),
                passHash = encryptor.generateHashedPassword(salt, password);

            let userObject = {
                username,
                firstName,
                lastName,
                email,
                age,
                gender,
                salt,
                passHash,
                profilePicture
            };

            var user = new User(userObject);

            return new Promise((resolve, reject) => {
                user.save((err, dbUser) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(dbUser);
                });
            });
        },

        findUserByCredentials(username) {
            return new Promise((resolve, reject) => {
                User.findOne({ username: username }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },

        findUserById(userId) {
            return new Promise((resolve, reject) => {
                User
                    .findOne({ _id: userId }, (err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },

        findUserByFacebookId(facebookId) {
            return new Promise((resolve, reject) => {
                User.findOne({ facebookId: facebookId }, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(res);
                });
            });
        },

        createFacebookUser(username, facebookId, facebookToken, email, firstName, lastName, gender, profilePicture) {
            let userObject = {
                username,
                facebookId,
                facebookToken,
                email,
                firstName,
                lastName,
                gender,
                profilePicture
            };

            let user = new User(userObject);
            return new Promise((resolve, reject) => {
                user.save((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(res);
                });
            });
        },

        updateUserInfo(username, newData) {
            return new Promise((resolve, reject) => {
                User.update({ username: username }, newData, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(username);
                });
            });
        }
    };
};