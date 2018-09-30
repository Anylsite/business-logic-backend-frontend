# business-logic-backend-frontend
Backend-Frontend for specific use cases, demo, PoCs.

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
