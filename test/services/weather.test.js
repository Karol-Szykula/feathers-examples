const assert = require('assert');
const app = require('../../src/app');

describe('\'weather\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/weather');

    assert.ok(service, 'Registered the service');
  });
});
