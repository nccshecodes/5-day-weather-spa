/*
Express- small, robust tooling for HTTP servers
For single page applications, web sites, hybrids, or public HTTP APIs.
Support for over 14 template engines via https://github.com/tj/consolidate.js
*/

const EXPRESS = require('express');
var APP = EXPRESS();

// handles secret keys/tokens
require('dotenv').config();
// to call key key: process.env.OPENWEATHERMAP_KEY

// set default directory for html content
APP.use(EXPRESS.static('views'));

APP.listen(1337);
