# 5 Day Weather Single Page Application

## Installation

This app is built using Node.js, with the server run by the npm express package.

### Requirements
Node.js and npm are required to run this app. Verify that you have node and npm installed by running `node -v` and `npm -v` in a terminal/console window. If not, you can install using the links below.
* [Node.js](https://nodejs.org/en/download/)
* [npm](https://www.npmjs.com/get-npm)

### To Run

Clone or download this git repository into a new project folder (eg 5-day-weather-app). Navigate to your new project folder. To launch the app run:

```
$ npm install
$ npm start
```
Local server runs at http://localhost:1337/. Manually close down the server when you are finished with `Ctrl-C`.

### npm Packages used:

[**Express**](https://www.npmjs.com/package/express)
A small, robust tooling for HTTP servers. For single page applications, web sites, hybrids, or public HTTP APIs. Support for over 14 template engines via [consolidate.js](https://github.com/tj/consolidate.js)

[**Request**](https://www.npmjs.com/package/request)
Designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

[**dotenv**](https://www.npmjs.com/package/dotenv)
A zero-dependency module that loads environment variables from a .env file into process.env

[**ejs**](http://ejs.co/)
A templating engine for generating reusable HTML structure and content

[**body-parser**](https://www.npmjs.com/package/body-parser)
Node.js body parsing middleware to handle form data.

## Brief specifications

1. Use the [**OpenWeatherMap 5 day weather forecast API**](http://openweathermap.org/forecast5) to retrieve the current 5 day weather forecast. Requires sign up to get an API key.

* Node.js environment, with no globally installed dependancies.

* Use HTML5, CSS3 and ES6.

* Think about the UX.

## Tasks

- [ ] Plan what elements are to be used for the 5 day forecast.
- [ ] Lo-fidelity wireframe web components to be used.
- [ ] Change api request from static to dynamic
- [ ] Extract data from json to provide required information for use in the view.
- [ ] Push live
- [ ] Testing

### Challenges

#### 5 day forcast json file

The json file is a huge with 39 data sets in total for the 5 day forcast

* 7 for today
* and 8 for the following 4 days.

Running through an online 'pretty jason' tool, makes the data human readable. Extracting one data set for a 3 hour span shows the properties that I have to select from.

#### What makes a good UX?

On talking with some friends, there's lots of data given that on a day to day basis we just don't use. The top two reasons cited for using a weather app were to:

1. Find out how warm it will be.
2. Know if it's going to rain.

Moving forward with this research, I need a javascript solution to do the following:

- [ ] parse the json and assign to a variable 'forecast'
- [ ] use forecast.main.temp_max to get highest temp for each day
- [ ] check if all the forecast.rain are empty to decide if it will rain for that day
- [ ] use forcast.dt_txt to create Date and get the day value

Other values that could be considered

* forecast.weather.icon gives a weather icon id reference
* forecast.weather.main gives weather parameters eg rain, snow, extreme.
* forecast.weather.description is a short text description eg. light rain, or scattered clouds.






