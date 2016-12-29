/* globals module require */

'use strict';

const characterEscaper = require('../utils/character-escaper');


module.exports = (data) => {
    return {
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
                        console.log('something');
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