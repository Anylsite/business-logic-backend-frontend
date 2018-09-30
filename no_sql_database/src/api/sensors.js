const { send } = require('micro');
const Sensors = require('../models/Sensors');

module.exports = async (req, res) => {
  send(res, 200, await Sensors.getAllSensors());
};
