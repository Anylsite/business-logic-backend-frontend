const { send } = require('micro');
const { Sensors } = require('../models');

/**
 * Sends one single sensor based on Sensor ID
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
  // get the sensor id form the query parameter
  // parsed by micro-router
  const { sensorId } = req.params;

  // Query the model to get data
  const data = (await Sensors.getAllSensors()).filter(s => s.id.toString() === sensorId.toString());
  if (!data || data.length === 0) {
    // If no data for the given sensor id
    send(res, 404, {
      status: 'fail',
      message: 'Sensor does not exists for the given sensor id',
    });
  } else {
    send(res, 200, {
      status: 'success',
      data: data[0],
    });
  }
};
