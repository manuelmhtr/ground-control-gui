/*
 *
 * RobotStatus reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_BATTERY_STATUS,
  SET_LEFT_MOTOR_STATUS,
  SET_RIGHT_MOTOR_STATUS,
  SET_LOCATION_STATUS,
  SET_CAMERA_STATUS,
} from './constants';

export const initialState = fromJS({});

function robotStatusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BATTERY_STATUS:
      return state.set('battery', action.status);
    case SET_LEFT_MOTOR_STATUS:
      return state.set('leftMotor', action.status);
    case SET_RIGHT_MOTOR_STATUS:
      return state.set('rightMotor', action.status);
    case SET_LOCATION_STATUS:
      return state.set('location', action.status);
    case SET_CAMERA_STATUS:
      return state.set('camera', action.status);
    default:
      return state;
  }
}

export default robotStatusReducer;
