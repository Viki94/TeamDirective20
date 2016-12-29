/* globals module */

'use strict';

module.exports = (str) => {
    return str
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/'/g, '&quot;')
        .replace(/'/g, '&#039;');
};