const { router, get } = require('microrouter');
const {
  ping,
  notFound,
  sensors,
} = require('./src');

module.exports = router(
  get('/ping', ping),
  get('/sensors', sensors),
  get('/*', notFound),
);
