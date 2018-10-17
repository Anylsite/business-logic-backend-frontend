const test = require('ava');
const FileSystemAdapter = require('./FileSystem');

test('Adapter has getAllSensors method', (t) => {
  const cls = new FileSystemAdapter();
  if (cls.getAllSensors) t.pass();
  else t.fail();
});

test('Adapter has getSensorRecordsForSensor method', (t) => {
  const cls = new FileSystemAdapter();
  if (cls.getSensorRecordsForSensor) t.pass();
  else t.fail();
});

test('Adapter has getCountOfRecords method', (t) => {
  const cls = new FileSystemAdapter();
  if (cls.getCountOfRecords) t.pass();
  else t.fail();
});
