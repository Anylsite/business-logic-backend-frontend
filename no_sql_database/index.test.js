const micro = require('micro');
const test = require('ava');
const listen = require('test-listen');
const request = require('request-promise');

// Service
const service = require('./index');

test('Check if the service is up and responds to ping requests', async (t) => {
  const microInstance = micro(service);
  const url = await listen(microInstance);
  const body = await request(`${url}/ping`);

  t.deepEqual(body, 'pong');
});
