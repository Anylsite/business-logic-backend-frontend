# Backend (no_sql_database)

This is a backend server that is responsible to get the data from the backend databases like Blockchain, Distributed filesystem, etc.

For the current example, the data will be read from the local file system.

_Please refer to the README of the parent project to generate the sample data for Filesystem adapter_

## Install Instructions

```bash
cd <project-directory>
yarn install
```
OR
```bash
cd <project-directory>
npm install
```

## Running the project

> Running it locally
```bash
yarn dev
```

or 

```bash
npm run dev
```

This will start the dev server on Port `3000` which will automatically listen to changes

> Running it in Production
```bash
yarn start
```

or 

```bash
npm start
```

This will start the project in the `PORT` specified in the environment variable. If the `PORT` environment variable is missing, it will start at `:3000` port.

## How to add data adapters?

Data Adapters are located in `src/models/adapters`

Any adapter need to have 3 functions for the purpose of this demo, viz: `getAllSensors`, `getSensorRecordsForSensor` and `getCountOfRecords`

- **getAllSensors**: Gets the list of sensors available
- **getSensorRecordsForSensor**: Get the data available for the given sensor id. This function should take one parameter, viz: `sensorId`
- **getCountOfRecords**: Get the count of records available for the given sensor id. This function should take one parameter, viz: `sensorId`

> Have a look at the FileSystem Data Adapter for a sample implementation of the Adapter.

All methods of the adapter should return a promise which should resovle to the actual data.

Sample implementation of the FileSystem Adapter:

```javascript
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
```

A model can extend the data adapter to make use of it. For example, the Sensors model extends to FileSystem adapter to make use of data stored locally in the FileSystem.

```javascript
/**
 * Sensors model extending the FileSystemModel.
 * It can extend to BlockChain or any other adapter.
 */
class Sensors extends FileModel {
}
```

## Unit Tests
```bash
yarn test
```
OR 

```bash
npm test
```

Expected test results are

```
  ✔ src › models › Sensors › Sensors has getAllSensors method
  ✔ src › models › Sensors › Sensors has getSensorRecordsForSensor method
  ✔ src › models › Sensors › Sensors has getCountOfRecords method
  ✔ src › models › adapters › Blockchain › Adapter has getAllSensors method
  ✔ src › models › adapters › Blockchain › Adapter has getSensorRecordsForSensor method
  ✔ src › models › adapters › Blockchain › Adapter has getCountOfRecords method
  ✔ src › models › adapters › FileSystem › Adapter has getAllSensors method
  ✔ src › models › adapters › FileSystem › Adapter has getSensorRecordsForSensor method
  ✔ src › models › adapters › FileSystem › Adapter has getCountOfRecords method
  ✔ index › Check if the service is up and responds to ping requests
  ✔ index › Returns the Sensor Data for Sensor ID 1
  ✔ index › Returns the list of sensors

  12 tests passed
```

## Test Coverage

```bash
yarn test:coverage
```
OR 

```bash
npm run test:coverage
```

Expected test results are

```bash
-------------------------------------|----------|----------|----------|----------|-------------------|
File                                 |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------------------|----------|----------|----------|----------|-------------------|
All files                            |    77.36 |       75 |    47.62 |    88.64 |                   |
 no_sql_database                     |      100 |      100 |      100 |      100 |                   |
  index.js                           |      100 |      100 |      100 |      100 |                   |
 no_sql_database/src                 |      100 |      100 |      100 |      100 |                   |
  index.js                           |      100 |      100 |      100 |      100 |                   |
 no_sql_database/src/api             |    83.33 |       75 |       50 |    93.75 |                   |
  notFound.js                        |    66.67 |      100 |        0 |      100 |                   |
  ping.js                            |    66.67 |      100 |        0 |      100 |                   |
  sensorData.js                      |     87.5 |       75 |      100 |     87.5 |                21 |
  sensors.js                         |      100 |      100 |      100 |      100 |                   |
 no_sql_database/src/models          |      100 |      100 |      100 |      100 |                   |
  Sensors.js                         |      100 |      100 |      100 |      100 |                   |
  index.js                           |      100 |      100 |      100 |      100 |                   |
 no_sql_database/src/models/adapters |    60.87 |      100 |    47.06 |       75 |                   |
  Blockchain.js                      |    36.36 |      100 |    22.22 |    57.14 |          25,34,43 |
  FileSystem.js                      |    83.33 |      100 |       75 |    88.89 |                45 |
-------------------------------------|----------|----------|----------|----------|-------------------|
```

## DEMO

A demo has been deployed to `https://anyledger-backend-api.now.sh`. Here are a few endpoints:

- [https://anyledger-backend-api.now.sh/ping](https://anyledger-backend-api.now.sh/ping)
- [https://anyledger-backend-api.now.sh/sensors](https://anyledger-backend-api.now.sh/sensors)
- [https://anyledger-backend-api.now.sh/sensors/1](https://anyledger-backend-api.now.sh/sensors/1)

> P.S. the demo is deployed on now where the deployments freeze due to inactivity. If you do not receive a response on ping endpoint, wait for a few seconds and try again.
____________________________________________

#### Structure of sample data

> sensors.json

```json
{
    "id": 1,
    "name": "Sensor 1",
    "meta": {
        "description": "Voluptatum blanditiis aspernatur deleniti sit a iure. Natus totam molestiae et placeat temporibus."
    }
}
```

> sensor_data.json

```json
{
    "id": 1,
    "sensor_id": 7,
    "temperature": 43,
    "current_position": {
        "lat": "11.8545",
        "long": "112.7264"
    }
}
```
