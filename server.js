/*

npm packages used:

Express- small, robust tooling for HTTP servers
For single page applications, web sites, hybrids, or public HTTP APIs.
Support for over 14 template engines via https://github.com/tj/consolidate.js

Request - designed to be the simplest way possible to make http calls.
It supports HTTPS and follows redirects by default.

dotenv - a zero-dependency module that loads environment variables
from a .env file into process.env

*/

const EXPRESS = require('express');
const APP = EXPRESS();

// handles secret keys/tokens
require('dotenv').config();

// api call using npm request package
const REQUEST = require('request');

let apiKey = process.env.OPENWEATHERMAP_KEY;
let city = 'London';
let country = 'UK';

let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`

REQUEST(url, function(error, response, body){
  if (error){
    console.log('error: ', error); // Print the error if one occurred
  } else {
    console.log('statusCode: ', response && response.statusCode); // Print the response status code if a response was received
    console.log('body: ', body) // Print the HTML
  }

});

// set default directory for html content
APP.use(EXPRESS.static('views'));

APP.listen(1337);
