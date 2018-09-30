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

```
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
