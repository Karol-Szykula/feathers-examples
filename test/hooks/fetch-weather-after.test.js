const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const fetchWeatherAfter = require('../../src/hooks/fetch-weather-after');

describe('\'fetchWeatherAfter\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      after: fetchWeatherAfter()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
