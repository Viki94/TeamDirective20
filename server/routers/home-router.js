'use strict';

const express = require('express'),
    path = require('path');

module.exports = function (app, data) {
    let router = new express.Router();

    router
        .get('/', function (req, res) {
            res.status(200).sendFile(path.join(__dirname, '../../dist/index.html'));
        })
        .get('*', (req, res) => {
            res.status(200).sendFile(path.join(__dirname, '../../dist/index.html'));
        });
    app.use(router);
};