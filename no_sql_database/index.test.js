const micro = require('micro');
const test = require('ava');
const listen = require('test-listen');
const request = require('request-promise');

// Service
const service = require('./index');

/**
 * Checks if the service responds to the /ping endpoint
 *
 * Checked if the /ping endpoints returns pond response
 */
test('Check if the service is up and responds to ping requests', async (t) => {
  const microInstance = micro(service);
  const url = await listen(microInstance);
  const body = await request(`${url}/ping`);

  t.deepEqual(body, 'pong');
});

/**
 * Tests if the /sensors endpoint returns correct output
 *
 * This is checked if the first element in the array contains
 * the id of the sensor.
 */
test('Returns the list of sensors', async (t) => {
  const microInstance = micro(service);
  const url = await listen(microInstance);
  const body = await request(`${url}/sensors`);
  const parsedBody = JSON.parse(body);

  if (parsedBody.status === 'success' && parsedBody.data[0].id) t.pass();
  else t.fail();
});
