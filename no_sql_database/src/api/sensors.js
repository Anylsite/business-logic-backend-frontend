const { send } = require('micro');
const Sensors = require('../models/Sensors');

/**
 * Responds to the sensors endpoint with the list of sensors available
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
  send(res, 200, {
    status: 'success',
    data: await Sensors.getAllSensors(),
  });
};
