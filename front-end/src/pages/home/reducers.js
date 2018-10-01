import { Types } from './actions';

const initialState = {
  sensors: [],
  sensorData: {},
  isProcessing: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types ? Types.FETCH_SENSORS_PROCESSING : 'FETCH_SENSORS_PROCESSING':
      return Object.assign({}, state, { isProcessing: true });

    case Types ? Types.FETCH_SENSORS_DATA_PROCESSING : 'FETCH_SENSORS_DATA_PROCESSING':
      return Object.assign({}, state, {
        sensorData: {
          [action.payload.sensorId]: {
            processing: true,
            ...state.sensorData[action.payload.sensorId],
          },
          ...state.sensorData,
        },
      });

    case Types ? Types.FETCH_SENSORS_SUCCESS : 'FETCH_SENSORS_SUCCESS':
      return Object.assign({}, state, {
        sensors: action.payload,
        isProcessing: false,
      });

    case Types ? Types.FETCH_SENSORS_DATA_SUCCESS : 'FETCH_SENSORS_DATA_SUCCESS':
      return Object.assign({}, state, {
        sensorData: {
          [action.payload.sensorId]: {
            processing: false,
            data: action.payload.data,
          },
          ...state.sensorData,
        },
      });

    case Types ? Types.FETCH_SENSORS_FAIL : 'FETCH_SENSORS_FAIL':
      return Object.assign({}, state, { isProcessing: false });

    case Types ? Types.FETCH_SENSORS_DATA_FAIL : 'FETCH_SENSORS_DATA_FAIL':
      return Object.assign({}, state, {
        sensorData: {
          [action.payload.sensorId]: {
            processing: false,
            ...state.sensorData[action.payload.sensorId],
          },
          ...state.sensorData,
        },
      });
    default:
      return state;
  }
}
