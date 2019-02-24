import { fromJS } from 'immutable';
import robotStatusReducer from '../reducer';

describe('robotStatusReducer', () => {
  it('returns the initial state', () => {
    expect(robotStatusReducer(undefined, {})).toEqual(fromJS({}));
  });
});
