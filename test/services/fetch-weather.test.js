const assert = require('assert');
const app = require('../../src/app');

describe('\'fetchWeather\' service', () => {
  it('registered the service', () => {
    const service = app.service('fetch-weather');

    assert.ok(service, 'Registered the service');
  });
});
