import { Types } from './actions';

const initialState = {
  sensors: [],
  isProcessing: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_SENSORS_PROCESSING:
      return Object.assign({}, state, { isProcessing: true });
    case Types.FETCH_SENSORS_SUCCESS:
      return Object.assign({}, state, {
        sensors: action.payload,
        isProcessing: false,
      });
    case Types.FETCH_SENSORS_FAIL:
      return Object.assign({}, state, { isProcessing: false });
    default:
      return state;
  }
}
