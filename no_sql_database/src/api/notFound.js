const { send } = require('micro');

/**
 * Raised a not found error when the route does not exists
 *
 * @param req
 * @param res
 * @returns {*}
 */
module.exports = (req, res) => send(res, 404, {
  status: 'fail',
  message: 'The api endpoint you are looking for does not exists',
});
