require('dotenv').config(); // handles secret keys/tokens
const EXPRESS = require('express');
const APP = EXPRESS();
const REQUEST = require('request'); // api call using npm request package
const BODY_PARSER = require('body-parser');

APP.use(EXPRESS.static('views')); // set default directory for html content
APP.use(BODY_PARSER.urlencoded({extended:true})); // to handle form data
APP.set('view engine', 'ejs');
APP.get('/', function(req, res){ // route all requests to root directory
  res.render('index'); // render index view using template engine
});
APP.post('/', function (req, res) {
  console.log(req.body.city);
  res.render('index');
})

let apiKey = process.env.OPENWEATHERMAP_KEY;
let city = 'London';
let country = 'UK';

let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`

REQUEST(url, function(error, response, body){
  if (error){
    console.log('error: ', error); // Print the error if one occurred
  } else {
    console.log('statusCode: ', response && response.statusCode); // Print the response status code if a response was received
    var forecast = body // Print the HTML
    console.log('forecast variable is: ', forecast);
    return forecast;
  }

});

APP.listen(3000, function(){
  console.log('5 day weather app listening on port 3000...')
});
