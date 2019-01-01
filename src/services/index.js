const fetchWeather = require('./fetch-weather/fetch-weather.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(fetchWeather);
};
