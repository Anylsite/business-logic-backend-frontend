const fs = require('fs');
const args = require('yargs').argv;
const faker = require('faker');

const numberOfSensors = args.sensors || 10;
const numberOfRecords = args.records || 1000;


const sensors = [];
console.log('> Generating Fake sensors...');
for (let i = 0; i < numberOfSensors; i++) {
  sensors.push({
    id: i + 1,
    name: `Sensor ${i + 1}`,
    meta: {
      description: faker.lorem.sentences(2),
      last_updated: faker.date.past(),
      company: faker.company.companyName(),
      hash: faker.finance.bitcoinAddress(),
      ipaddress: faker.internet.ip(),
      version: faker.system.semver(),
    },
  });
}

console.log(`> Generated ${numberOfSensors} Sensors!`);
console.log('> Generating Fake sensor data...');

const sensorData = [];
for (let i = 0; i < numberOfRecords; i++) {
  sensorData.push({
    id: i + 1,
    sensor_id: Math.floor(Math.random() * numberOfSensors) + 1,
    temperature: Math.floor(Math.random() * 75) + 25,
    current_position: {
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
    },
    created_at: faker.date.past(),
  });
}

console.log(`> Generated ${numberOfRecords} Sensors data!`);

console.log('> Writing data...');

fs.writeFile('./no_sql_database/src/sample_data/sensors.json', JSON.stringify(sensors, null, 4), (err) => {
  if (err) console.error('> Error Writing Sensors file...');
  else console.log('> Sensors written to file system');
});

fs.writeFile('./no_sql_database/src/sample_data/sensor_data.json', JSON.stringify(sensorData, null, 4), (err) => {
  if (err) console.error('> Error Writing Sensors Data file...');
  else console.log('> Sensors data written to file system');
});
