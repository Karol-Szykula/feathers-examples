// Initializes the `weather` service on path `/api/weather`
const createService = require('feathers-nedb');
const createModel = require('../../models/weather.model');
const hooks = require('./weather.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/weather', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/weather');

  service.hooks(hooks);
};
