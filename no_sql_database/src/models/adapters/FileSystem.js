/**
 * Adapter for the FileSystem
 *
 * This is an adapter to the file system as a database.
 * This class should mimic the other adapters like Blockchain, Distributed Storage, MongoDB, etc.
 */

const Sensors = require('../../sample_data/sensors');
const SensorData = require('../../sample_data/sensor_data');

class FileSystemAdapter {
  /**
   * Initiate the Class with reading the file system data saved to JSON files
   */
  constructor() {
    this.sensors = Sensors;
    this.sensor_data = SensorData;
  }

  /**
   * Gets all the sensors from the sensors database
   * @returns {Promise<any>}
   */
  getAllSensors() {
    return new Promise(resolve => resolve(this.sensors));
  }

  /**
   * Gets the records for each sensor
   * @param {Number|String} sensorId ID of the Sensor
   * @returns {Promise<any>}
   */
  getSensorRecordsForSensor(sensorId) {
    return new Promise(resolve => resolve(
      this.sensor_data.filter(s => s.sensor_id.toString() === sensorId.toString()),
    ));
  }

  /**
   * Gets the count of records for each sensor
   * @param {Number|String} sensorId ID of the sensor
   * @returns {Promise<any>}
   */
  getCountOfRecords(sensorId) {
    return new Promise(resolve => resolve(this.getSensorRecordsForSensor(sensorId).length));
  }
}

module.exports = FileSystemAdapter;
