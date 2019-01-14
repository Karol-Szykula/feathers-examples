// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const fetch = require('node-fetch')

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const weatherService = context.app.service('api/weather')

    await fetch('http://api.openweathermap.org/data/2.5/weather?q=Lublin,pl&APPID=ec70d779550287b5004bc56e1f4500bc&units=metric')
      .then(response => { return response.json() })
      .then((json) => {
        context.result = json


        // console.log(context.method)
        // console.log(context.query)
      })
      .catch(error => { console.log(error) })

    return context;
  };
};
