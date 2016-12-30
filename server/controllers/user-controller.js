/* globals module require */

'use strict';

const characterEscaper = require('../utils/character-escaper');


module.exports = (data) => {
    return {
        getAllUsers(req, res) {
            data.findAllUsers()
                .then(users => {
                    res.status(200).json(users);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },
        getUserById(req, res) {
            data.findUserById(req.body.id)
                .then(user => {
                    if (!user) {
                        return res.status(404).json({
                            success: false,
                            message: 'No such user found!'
                        });
                    }

                    let userData = JSON.parse(JSON.stringify(user));
                    delete userData.passHash;
                    delete userData.salt;

                    res.status(200).json(userData);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        },
        makeAdmin(req, res) {
            let user = req.body;
            user.admin = true;
            data.updateUserInfo(user.username, user)
                .then(result => {
                    if (!result) {
                        return res.status(400).json({ success: false });
                    }

                    res.status(200).json({ success: true });
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },

        toggleBanUser(req, res) {
            let user = req.body.username;
            data.findUserByCredentials(user)
                .then(resUser => {
                    if (!resUser) {
                        return res.status(400).json({ success: false });
                    }

                    if (resUser.isDeleted) {
                        resUser.isDeleted = false;
                    } else {
                        resUser.isDeleted = true;
                    }

                    resUser.save((err, response) => {
                        if (err) {
                            return res.status(400).json({ success: false, err });
                        }
                        return res.status(200).json({ success: true, response });
                    });
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },

        editProfile(req, res) {
            let newData = {};

            if (req.body) {
                Object.keys(req.body)
                    .forEach(key => {
                        if (typeof req.body[key] === 'string') {
                            req.body[key] = characterEscaper(req.body[key]).trim();
                        }
                        if (req.body[key] !== '' && req.body[key] !== null) {
                            newData[key] = req.body[key];
                        }
                    });
            }
            data.updateUserInfo(req.body.username, newData)
                .then((user) => {
                    if (!user) {
                        return res.status(401).json({
                            success: false,
                            message: 'Unauthorized!'
                        });
                    }

                    res.status(200).json({ success: true });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        }
    };
};