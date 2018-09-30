const microCors = require('micro-cors');
const { router, get } = require('microrouter');
const {
  ping,
  notFound,
  sensors,
  sensorData,
} = require('./src');

const cors = microCors({ allowMethods: ['GET'] });

module.exports = cors(router(
  // Ping response to check the server's health. Typically used internally
  get('/ping', ping),
  // Return the list of sensors from the service
  get('/sensors', sensors),
  // Return the sensor data for a given sensor
  get('/sensors/:sensorId', sensorData),
  // All the other requests are moved to notFound log
  get('/*', notFound),
));
