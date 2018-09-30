# Backend (no_sql_database)

Steps to generate sample data

```bash
cd <project-directory>
node generate_sample_data.js --sensors 10 --records 1000
```

> Here --sensors are the number of sensors to generate and --records is to generate the number of records for sensors.

This will write two files viz

- no_sql_database/src/sample_data/sensors.json 
- no_sql_database/src/sample_data/sensor_data.json 

### Structure of sample data

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
