'use strict';

// to connect to the remote db using the terminal ===> "mongo ds141428.mlab.com:41428/pet-adoption-service -u admin -p dromosagapis" (without quotes)
let connectionString = {
    production: 'mongodb://admin:dromosagapis@ds141428.mlab.com:41428/pet-adoption-service',
    development: 'mongodb://localhost/pet-adoption-service'
};

module.exports = {
    port: process.env.PORT || 3000,
    connectionString: connectionString['development']
};