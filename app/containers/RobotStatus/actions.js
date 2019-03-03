/*
 *
 * RobotStatus actions
 *
 */

import {
  SET_BATTERY_STATUS,
  SET_LEFT_MOTOR_STATUS,
  SET_RIGHT_MOTOR_STATUS,
  SET_LOCATION_STATUS,
  SET_CAMERA_STATUS,
} from './constants';

export function setBatteryStatus(status) {
  return {
    status,
    type: SET_BATTERY_STATUS,
  };
}

export function setLeftMotorStatus(status) {
  return {
    status,
    type: SET_LEFT_MOTOR_STATUS,
  };
}

export function setRightMotorStatus(status) {
  return {
    status,
    type: SET_RIGHT_MOTOR_STATUS,
  };
}

export function setLocationStatus(status) {
  return {
    status,
    type: SET_LOCATION_STATUS,
  };
}

export function setCameraStatus(status) {
  return {
    status,
    type: SET_CAMERA_STATUS,
  };
}
