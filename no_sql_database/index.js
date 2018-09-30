const { router, get } = require('microrouter');
const {
  ping,
  notFound,
} = require('./src');

module.exports = router(
  get('/ping', ping),
  get('/*', notFound),
);
