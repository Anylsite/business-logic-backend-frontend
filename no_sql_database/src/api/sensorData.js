    const { send } = require('micro');
    const { Sensors } = require('../models');

/**
 * Responds to the sensors endpoint with the list of sensors available
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
  // get the sensor id form the query parameter
  // parsed by micro-router
  const { sensorId } = req.params;

  // Query the model to get data
  const data = await Sensors.getSensorRecordsForSensor(sensorId);

  if (!data || !data.length > 0) {
    // If no data for the given sensor id
    send(res, 404, {
      status: 'fail',
      message: 'Sensor data does not exists for the given sensor id',
    });
  } else {
    send(res, 200, {
      status: 'success',
      count: data.length,
      data,
    });
  }
};
