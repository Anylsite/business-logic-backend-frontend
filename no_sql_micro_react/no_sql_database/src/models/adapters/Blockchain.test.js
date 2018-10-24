const test = require('ava');
const Blockchain = require('./Blockchain');

test('Adapter has getAllSensors method', (t) => {
  const cls = new Blockchain();
  if (cls.getAllSensors) t.pass();
  else t.fail();
});

test('Adapter has getSensorRecordsForSensor method', (t) => {
  const cls = new Blockchain();
  if (cls.getSensorRecordsForSensor) t.pass();
  else t.fail();
});

test('Adapter has getCountOfRecords method', (t) => {
  const cls = new Blockchain();
  if (cls.getCountOfRecords) t.pass();
  else t.fail();
});
