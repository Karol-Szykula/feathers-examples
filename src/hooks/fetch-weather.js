// We need this to create the MD5 hash
const crypto = require('crypto');

var async = require('express-async-await')
var fetch = require('node-fetch')

// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar';
// The size query. Our chat needs 60px images
const query = 's=60';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {

    // Best practice: hooks should always return the context
    return context;
  };
};

function fetchWeather(url) {
  // url = url || 'api.openweathermap.org/data/2.5/weather?q=Lublin,pl&APPID=ec70d779550287b5004bc56e1f4500bc'

  return fetch('https://api.openweathermap.org/data/2.5/weather?q=Lublin,pl&APPID=ec70d779550287b5004bc56e1f4500bc')
}