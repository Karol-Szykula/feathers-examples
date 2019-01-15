const assert = require('assert');
const app = require('../../src/app');

describe('\'weatherData\' service', () => {
  it('registered the service', () => {
    const service = app.service('data/weather');

    assert.ok(service, 'Registered the service');
  });
});
