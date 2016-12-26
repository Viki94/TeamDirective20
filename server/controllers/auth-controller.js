'use strict';

const passport = require('passport'),
    characterEscaper = require('../utils/character-escaper'),
    jwt = require('jsonwebtoken');


module.exports = (data) => {
    return {
        register(req, res) {
            if (!req.body) {
                res.status(401).json({ success: false, message: 'Empty request received!' });
                return;
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
                        });
                })
                .catch(console.log);
        },
        login(req, res, next) {
            let username = req.body.username,
                password = req.body.password;

            data.findUserByCredentials(username)
                .then(user => {
                    if (!user.authenticate(password)) {
                        res.status(401).json({
                            success: false,
                            message: 'Incorrect username or password!'
                        });
                        return;
                    }

                    let token = jwt.sign(user, 'secret-as-shit', {
                        expiresIn: 60 * 60 * 24 // 24 hours in seconds
                    });
                    res.status(200).json({
                        success: true,
                        message: `User ${user.username} successfully logged in!`,
                        token: 'JWT ' + token
                    });
                });
        },
        logout(req, res) {
            req.logout();
            res.status(200).json({
                success: true,
                message: `User successfully logged out!`
            });
        },
        getUserInfo(req, res) {
            const token = req.headers.authorization;
            
            if (token) {
                let decoded = jwt.decode(token, 'secret-as-shit');

                console.log(decoded);

                const userObject = decoded._doc;
                let user = {
                    username: userObject.username
                };

                res.status(200).json(user);
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Token auth failed!'
                });
            }
        }
    };
};