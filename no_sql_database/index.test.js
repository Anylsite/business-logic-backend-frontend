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
 * Tests if the /sensors.json endpoint returns correct output
 * This is checked if the status is success
 */
test('Returns the list of sensors', async (t) => {
  const microInstance = micro(service);
  const url = await listen(microInstance);
  const body = await request(`${url}/sensors.json`);
  const parsedBody = JSON.parse(body);

  if (parsedBody.status === 'success') t.pass();
  else t.fail();
});

/**
 * Tests if the /sensors/1/data.json endpoint returns correct output
 * This is checked if the status is success
 */
test('Returns the Sensor Data for Sensor ID 1', async (t) => {
  const microInstance = micro(service);
  const url = await listen(microInstance);
  const body = await request(`${url}/sensors/1/data.json`);
  const parsedBody = JSON.parse(body);

  if (parsedBody.status === 'success') t.pass();
  else t.fail();
});

/**
 * Tests if the /sensors/1/sensor.json endpoint returns correct output
 * This is checked if the status is success
 */
test('Returns the Sensor Information for Sensor ID 1', async (t) => {
  const microInstance = micro(service);
  const url = await listen(microInstance);
  const body = await request(`${url}/sensors/1/sensor.json`);
  const parsedBody = JSON.parse(body);

  if (parsedBody.status === 'success') t.pass();
  else t.fail();
});
