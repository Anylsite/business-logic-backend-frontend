import { Config } from '../../config';

export const Types = {
  FETCH_SENSORS: 'FETCH_SENSORS',
  FETCH_SENSORS_PROCESSING: 'FETCH_SENSORS_PROCESSING',
  FETCH_SENSORS_SUCCESS: 'FETCH_SENSORS_SUCCESS',
  FETCH_SENSORS_FAIL: 'FETCH_SENSORS_FAIL',
  FETCH_SENSORS_DATA: 'FETCH_SENSORS_DATA',
  FETCH_SENSORS_DATA_PROCESSING: 'FETCH_SENSORS_DATA_PROCESSING',
  FETCH_SENSORS_DATA_SUCCESS: 'FETCH_SENSORS_DATA_SUCCESS',
  FETCH_SENSORS_DATA_FAIL: 'FETCH_SENSORS_DATA_FAIL',
};

export const fetchSensors = () => (dispatch) => {
  dispatch({ type: Types.FETCH_SENSORS_PROCESSING });
  const apiUrl = `${Config.api.url}/sensors.json`;
  try {
    // eslint-disable-next-line no-undef
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        if (data.status === 'success') {
          dispatch({ type: Types.FETCH_SENSORS_SUCCESS, payload: data.data });
        } else {
          dispatch({ type: Types.FETCH_SENSORS_FAIL, payload: data.message });
        }
      }).catch((err) => {
      // eslint-disable-next-line no-console
        console.error(err.message, err);
        dispatch({ type: Types.FETCH_SENSORS_FAIL, payload: err });
      });
  } catch (err) {
    dispatch({ type: Types.FETCH_SENSORS_FAIL, payload: err });
  }
};

export const fetchSensorData = sensorId => (dispatch) => {
  dispatch({ type: Types.FETCH_SENSORS_DATA_PROCESSING, payload: sensorId });
  const apiUrl = `${Config.api.url}/sensors/${sensorId}/data.json`;
  try {
    // eslint-disable-next-line no-undef
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        if (data.status === 'success') {
          dispatch({
            type: Types.FETCH_SENSORS_DATA_SUCCESS,
            payload: {
              sensorId,
              data,
            },
          });
        } else {
          dispatch({
            type: Types.FETCH_SENSORS_DATA_FAIL,
            payload: { sensorId, err: { message: data.message } },
          });
        }
      });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message, err);
    dispatch({ type: Types.FETCH_SENSORS_DATA_PROCESSING, payload: { sensorId, err } });
  }
};
