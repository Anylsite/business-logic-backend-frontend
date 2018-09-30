import { Config } from '../../config';

export const Types = {
  FETCH_SENSORS: 'FETCH_SENSORS',
  FETCH_SENSORS_PROCESSING: 'FETCH_SENSORS_PROCESSING',
  FETCH_SENSORS_SUCCESS: 'FETCH_SENSORS_SUCCESS',
  FETCH_SENSORS_FAIL: 'FETCH_SENSORS_FAIL',
};

export const fetchSensors = () => (dispatch) => {
  dispatch({ type: Types.FETCH_SENSORS_PROCESSING });
  const apiUrl = `${Config.api.url}/sensors`;
  // eslint-disable-next-line no-undef
  fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'success') {
        dispatch({ type: Types.FETCH_SENSORS_SUCCESS, payload: data.data });
      } else {
        dispatch({ type: Types.FETCH_SENSORS_FAIL });
      }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err.message, err);
      dispatch({ type: Types.FETCH_SENSORS_FAIL, payload: err });
    });
};
