import { createSelector } from 'reselect';
import { initialState } from './reducer';

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

const makeSelectRobotStatus = () =>
  createSelector(selectRobotStatusDomain, substate => substate.toJS());

export default makeSelectRobotStatus;
export { selectRobotStatusDomain };
