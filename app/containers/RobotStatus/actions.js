/*
 *
 * RobotStatus actions
 *
 */

import {
  SET_LEFT_MOTOR_STATUS,
  SET_RIGHT_MOTOR_STATUS,
  SET_CAMERA_STATUS,
} from './constants';

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

export function setCameraStatus(status) {
  return {
    status,
    type: SET_CAMERA_STATUS,
  };
}
