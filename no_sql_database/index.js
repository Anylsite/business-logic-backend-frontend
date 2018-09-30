const { router, get } = require('microrouter');
const {
  ping,
  notFound,
  sensors,
} = require('./src');

module.exports = router(
  // Ping response to check the server's health. Typically used internally
  get('/ping', ping),
  // Return the list of sensors from the service
  get('/sensors', sensors),
  // All the other requests are moved to notFound log
  get('/*', notFound),
);
