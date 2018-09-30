const { send } = require('micro');

/**
 * Respond to the ping route with a pong
 * Typically used internally for checking the server's health
 *
 * @param req
 * @param ress
 * @returns {*}
 */
module.exports = (req, res) => send(res, 200, 'pong');
