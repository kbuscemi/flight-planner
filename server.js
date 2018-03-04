const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const app = express();

require('dotenv').config();


// connect to MongoDB database;
require('./config/database')

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// put API routes here, before the 'catch all' route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/flights', require('./routes/api/flights'));
app.use('/api/airports', require('./routes/api/airports'));
// Catch-all route for SPA. necessary for a SPA's client-side routing to properly work
// ('/*') is a wild card and will match anything/everything
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));