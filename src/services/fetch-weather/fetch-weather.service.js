// Initializes the `fetchWeather` service on path `/fetch-weather`
const createService = require('feathers-nedb');
const createModel = require('../../models/fetch-weather.model');
const hooks = require('./fetch-weather.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fetch-weather', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('fetch-weather');

  service.hooks(hooks);
};
