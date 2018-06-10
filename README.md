# Weather Web App
This app gets weather forecast information available in GreatBritain for the next five days.

This app has been developed using :

* React/Redux boiler plate 
* [axios]Promises to make aysncronous network calls.
* parse JSON data and generate model object from the data.
* use [redux-promise](https://github.com/acdlite/redux-promise) middleware for handling promises.
* [OpenWeatherMap](http://openweathermap.org) API to get weather forecast for 5 days.
* google maps API to display the maps based on long/lat returned by OpenWeatherMap
* react-d3 for plotting graphs
* JEST framework for snapshot and unittestcases

###Getting Started###

Checkout this repo, install dependencies, then start webpack server with the following:

```
	> git clone https://github.com/mailanandkumarsingh/weather-app.git
	> cd react-redux-weather-app
	> npm install
	> npm run dev
	> open browser - localhost:8080
	> npm run test(for unittestcases)
	> npm run test:coverage(for coverage)
```
