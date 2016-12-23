'use strict';

let connectionString = {
    production: '...',
    development: 'mongodb://localhost/pet-adoption-service'
};

module.exports = {
    port: process.env.PORT || 3000,
    connectionString: connectionString['development']
};