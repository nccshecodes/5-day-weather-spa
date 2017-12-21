require('dotenv').config(); // handles secret keys/tokens
const EXPRESS = require('express');
const APP = EXPRESS();
const REQUEST = require('request'); // api call using npm request package
const BODY_PARSER = require('body-parser');
const API_KEY = process.env.OPENWEATHERMAP_KEY;
var forecast = {};

APP.use(EXPRESS.static('views')); // set default directory for html content
APP.use(BODY_PARSER.urlencoded({extended:true})); // to handle form data
APP.set('view engine', 'ejs');
APP.get('/', function(req, res){ // route all requests to root directory
  res.render('index'); // render index view using template engine
});
APP.post('/', function (req, res) {
  let city = req.body.city;
  let country = 'UK';
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`
REQUEST(url, function(error, response, body){
  if (error){
    console.log('error: ', error); // Print the error if one occurred
    res.render('index', {forecast: null, error: 'Error: ${error}'});
  } else {
    console.log('statusCode: ', response && response.statusCode); // Print the response status code if a response was received
    console.log('body: ', body);
    // console.log(req.body.city);
    var forecast = JSON.parse(body);
    console.log('forecast test: ', forecast.list[0].weather[1]);
    if (forecast == undefined){
      res.render('index', {forecast: null, error: 'Error, please try again'});
    } else {
      let forecastText = forecast.list;
      res.render('index', {forecast: forecastText, error: null});
      }
    return forecast;
    }
  });
});

console.log()
APP.listen(3000, function(){
  console.log('5 day weather app listening on port 3000...')
});
