

const fetchWeather = require('../../hooks/fetch-weather');

const fetchWeatherAfter = require('../../hooks/fetch-weather-after');

module.exports = {
  before: {
    all: [],
    find: [fetchWeather()],
    get: [],
    create: [fetchWeather()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [fetchWeatherAfter()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
