import { Types } from './actions';

const initialState = {
  fetchingSensorData: {
    sensorId: null,
    processing: false,
  },
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

    case Types ? Types.FETCH_SINGLE_SENSOR_PROCESSING : 'FETCH_SINGLE_SENSOR_PROCESSING':
      return Object.assign({}, state, {
        fetchingSensorData: { sensorId: action.payload, processing: true },
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

    case Types ? Types.FETCH_SINGLE_SENSOR_SUCCESS : 'FETCH_SINGLE_SENSOR_SUCCESS':
      return Object.assign({}, state, {
        fetchingSensorData: { sensorId: action.payload.sensorId, processing: false },
        sensors: [
          action.payload.data,
          ...state.sensors.filter(s => s.id.toString() !== action.payload.sensorId.toString()),
        ].sort((a, b) => a.id - b.id),
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

    case Types ? Types.FETCH_SINGLE_SENSOR_FAIL : 'FETCH_SINGLE_SENSOR_FAIL':
      return Object.assign({}, state, {
        fetchingSensorData: { processing: false },
      });

    default:
      return state;
  }
}
