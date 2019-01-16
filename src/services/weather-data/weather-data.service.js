// Initializes the `weatherData` service on path `/data/weather`
const createService = require('feathers-nedb');
const createModel = require('../../models/weather-data.model');
const hooks = require('./weather-data.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/data/weather', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('/data/weather');

  service.hooks(hooks);
};
