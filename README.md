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

**Express**
A small, robust tooling for HTTP servers. For single page applications, web sites, hybrids, or public HTTP APIs. Support for over 14 template engines via [consolidate.js](https://github.com/tj/consolidate.js)

**Request**
Designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

**dotenv**
A zero-dependency module that loads environment variables from a .env file into process.env

**ejs**
A templating engine for generating reusable HTML structure and content

**body-parser**
Node.js body parsing middleware to handle form data.

## Brief specifications

1. Use the [**OpenWeatherMap 5 day weather forecast API**](http://openweathermap.org/forecast5) to retrieve the current 5 day weather forecast. Requires sign up to get an API key.

* Node.js environment, with no globally installed dependancies.

* Use HTML5, CSS3 and ES6.

* Think about the UX.
