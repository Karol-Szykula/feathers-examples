
const weatherData = require('./weather-data/weather-data.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(weatherData);
};
