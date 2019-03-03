import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export const initialState = fromJS({});

/**
 * Direct selector to the robotStatus state domain
 */

const selectRobotStatusDomain = state => state.get('robotStatus', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RobotStatus
 */

const makeSelectBattery = () =>
  createSelector(selectRobotStatusDomain, substate => {
    return substate.toJS().battery;
  });

const makeSelectLeftMotor = () =>
  createSelector(selectRobotStatusDomain, substate => {
    return substate.toJS().leftMotor;
  });

const makeSelectRightMotor = () =>
  createSelector(selectRobotStatusDomain, substate => {
    return substate.toJS().rightMotor;
  });

const makeSelectLocation = () =>
  createSelector(selectRobotStatusDomain, substate => {
    return substate.toJS().location;
  });

export {
  makeSelectLeftMotor,
  makeSelectRightMotor,
  makeSelectBattery,
  makeSelectLocation,
};
