/* globals module require */

'use strict';

const characterEscaper = require('../utils/character-escaper'),
    jwt = require('jsonwebtoken');


module.exports = (data) => {
    return {
        register(req, res) {
            if (!req.body) {
                res.status(401).json({ success: false, message: 'Empty request received!' });
                return;
            }

            Object.keys(req.body)
                .forEach(key => {
                    if (typeof req.body[key] === 'string') {
                        req.body[key] = characterEscaper(req.body[key]);
                    }
                });

            if (req.body.password.length < 6 || req.body.password.length > 15) {
                return res.status(400).json({ message: 'Password should be between 6 and 15 symbols!' });
            }

            if (req.body.password !== req.body.confirmPassword) {
                return res.status(400).json({ message: 'Passwords do not match!' });
            }

            data.findUserByCredentials(req.body.username)
                .then((user) => {
                    if (user) {
                        res.status(409).json({
                            success: false,
                            message: 'User already exist!'
                        });
                        return;
                    }

                    data.createUser(req.body.username, req.body.password, req.body.firstName, req.body.lastName, req.body.email,
                        req.body.age, req.body.gender, req.body.profilePicture)
                        .then(() => {
                            res.status(201).json({
                                success: true,
                                message: `User ${req.body.username} succesfully created!`
                            });
                        })
                        .catch(err => {
                            res.status(400).json(err);
                        });
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },
        login(req, res, next) {
            let username = req.body.username,
                password = req.body.password;

            data.findUserByCredentials(username)
                .then(user => {
                    if (!user || !user.authenticate(password)) {
                        res.status(401).json({
                            success: false,
                            message: 'Incorrect username or password!'
                        });
                        return;
                    }

                    let token = jwt.sign(user, 'secret-as-shit', {
                        expiresIn: 60 * 60 * 24 // 24 hours in seconds
                    });

                    let userToReturn = JSON.parse(JSON.stringify(user));
                    delete userToReturn.passHash;
                    delete userToReturn.salt;

                    res.status(200).json({
                        success: true,
                        message: `User ${user.username} successfully logged in!`,
                        token: 'JWT ' + token,
                        user: userToReturn
                    });
                });
        },
        logout(req, res) {
            req.logout();
            res.status(200).json({
                success: true,
                message: 'User successfully logged out!'
            });
        },
        checkLogin(req, res) {
            const token = req.headers.authorization;

            if (token) {
                let decoded = jwt.decode(token.split(' ')[1], 'secret-as-shit');
                const user = decoded._doc;
                data.findUserById(user._id)
                    .then((resUser) => {
                        let result = {
                            success: true
                        };

                        res.status(200).json(result);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Token auth failed!'
                });
            }
        }
    };
};