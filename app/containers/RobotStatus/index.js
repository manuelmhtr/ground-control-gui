/**
 *
 * RobotStatus
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRobotStatus from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  setLeftMotorStatus,
  setRightMotorStatus,
  setCameraStatus,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class RobotStatus extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const onUpdatedRobotStatus = () => {
      return {
        leftMotor: {
          speed: Math.random() * 100,
        },
        rightMotor: {
          speed: Math.random() * 100,
        },
        camera: {
          videoUrl: 'http://192.168.15.36:8000',
        },
      };
    };

    setInterval(() => {
      const robotState = onUpdatedRobotStatus();
      dispatch(setLeftMotorStatus(robotState.leftMotor));
      dispatch(setRightMotorStatus(robotState.rightMotor));
      dispatch(setCameraStatus(robotState.camera));
    }, 3000);
  }

  render() {
    return null;
  }
}

RobotStatus.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  robotStatus: makeSelectRobotStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'robotStatus', reducer });
const withSaga = injectSaga({ key: 'robotStatus', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RobotStatus);
