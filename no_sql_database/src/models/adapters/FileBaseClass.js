const Sensors = require('../../sample_data/sensors');
const SensorData = require('../../sample_data/sensor_data');

module.exports = class FileBaseClass {
  constructor() {
    this.sensors = Sensors;
    this.sensor_data = SensorData;
  }

  getAllSensors() {
    return new Promise(resolve => resolve(this.sensors));
  }

  getSensorRecordsForSensor(sensorId) {
    return new Promise(resolve => resolve(this.sensor_data.filter(s => s.sensor_id === sensorId)));
  }

  getCountOfRecords(sensorId) {
    return new Promise(resolve => resolve(this.getSensorRecordsForSensor(sensorId).length));
  }
};
