# business-logic-backend-frontend
Backend-Frontend for specific use cases, demo, PoCs.

The project is divided into 2 parts, viz:

- #### Front End
- #### Backend

## Frontend

> Front end is a React Web application bootstrapped with `create-react-app`

## Backend (no_sql_database)

> Backend is a nodejs application that uses a framework called `micro`

#### Steps to generate sample data for the backend

```bash
cd <project-directory>
node generate_sample_data.js --sensors 10 --records 1000
```

> Here --sensors are the number of sensors to generate and --records is to generate the number of records for sensors.

This will write two files viz

- no_sql_database/src/sample_data/sensors.json 
- no_sql_database/src/sample_data/sensor_data.json 
