const { send } = require('micro');

module.exports = (req, res) => send(res, 404, 'Not found route');
