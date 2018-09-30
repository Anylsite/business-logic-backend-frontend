/**
 * Adapter for Blockchain
 *
 * This is an adapter for Blockchain, getting its data from a Blockchain.
 */

class BlockchainAdapter {
  /**
   * Initiate the Class with reading the file system data saved to JSON files
   */
  constructor() {
    this.getDataFromBlockchain();
  }

  getDataFromBlockchain() {
    this.sensors = [];
    this.sensor_data = [];
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
    return new Promise(resolve => resolve(this.sensor_data.filter(s => s.sensor_id === sensorId)));
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

module.exports = BlockchainAdapter;
