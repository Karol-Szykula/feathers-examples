const weather = require('./weather/weather.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(weather);
};
