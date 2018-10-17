const test = require('ava');
const Sensors = require('./Sensors');

test('Sensors has getAllSensors method', (t) => {
  const cls = new Sensors();
  if (cls.getAllSensors) t.pass();
  else t.fail();
});

test('Sensors has getSensorRecordsForSensor method', (t) => {
  const cls = new Sensors();
  if (cls.getSensorRecordsForSensor) t.pass();
  else t.fail();
});

test('Sensors has getCountOfRecords method', (t) => {
  const cls = new Sensors();
  if (cls.getCountOfRecords) t.pass();
  else t.fail();
});
