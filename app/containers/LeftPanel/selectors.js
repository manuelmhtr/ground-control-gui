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

const makeSelectLeftMotor = () =>
  createSelector(selectRobotStatusDomain, substate => {
    return substate.toJS().leftMotor;
  });

const makeSelectRightMotor = () =>
  createSelector(selectRobotStatusDomain, substate => {
    return substate.toJS().rightMotor;
  });

export { makeSelectLeftMotor, makeSelectRightMotor };
