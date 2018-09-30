const { send } = require('micro');
const { router, get } = require('microrouter');

const ping = (req, res) => send(res, 200, 'pong');
const notfound = (req, res) => send(res, 404, 'Not found route');

module.exports = router(get('/ping', ping), get('/*', notfound));
