const ping = require('./api/ping');
const notFound = require('./api/notFound');
const sensors = require('./api/sensors');
const sensorData = require('./api/sensorData');
const singleSensor = require('./api/singleSensor');

module.exports = {
  ping,
  notFound,
  sensors,
  sensorData,
  singleSensor,
};
