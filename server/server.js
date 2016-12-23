'use strict';

const config = require('./config'),
    app = require('./config/express'),
    data = require('./data'),
    http = require('http');

require('./config/mongoose')(config);
require('./config/passport')(app, data);
require('./routers')(app, data);

//app.listen(config.port, () => console.log('Server now up and running at http://localhost:3000'));

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));