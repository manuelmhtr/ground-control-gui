/**
 *
 * LeftPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import {
  makeSelectLeftMotor,
  makeSelectRightMotor,
  makeSelectCamera,
} from './selectors';
import Header from '../../components/Header';
import Cell from '../../components/Cell';
import CellSeparator from '../../components/CellSeparator';
import './styles.css';

import messages from './messages';

const EMPTY_VALUE = '-';
const PRIMARY_COLOR = '#2e8aff';

/* eslint-disable react/prefer-stateless-function */
export class LeftPanel extends React.Component {
  getLeftMotorData() {
    const { leftMotor } = this.props;
    const { speed = null } = leftMotor || {};

    return {
      speedValue: speed,
      speedLabel: getPercentageLabel(speed),
    };
  }

  getRightMotorData() {
    const { rightMotor } = this.props;
    const { speed = null } = rightMotor || {};

    return {
      speedValue: speed,
      speedLabel: getPercentageLabel(speed),
    };
  }

  render() {
    const leftMotor = this.getLeftMotorData();
    const rightMotor = this.getRightMotorData();

    return (
      <div id="left-panel">
        <Header />
        <CellSeparator
          text={<FormattedMessage {...messages.motorsSeparator} />}
        />
        <Cell
          title={<FormattedMessage {...messages.leftMotorSpeed} />}
          value={leftMotor.speedLabel}
          levelValue={leftMotor.speedValue}
          levelColor={PRIMARY_COLOR}
        />
        <Cell
          title={<FormattedMessage {...messages.rightMotorSpeed} />}
          value={rightMotor.speedLabel}
          levelValue={rightMotor.speedValue}
          levelColor={PRIMARY_COLOR}
        />
      </div>
    );
  }
}

LeftPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  leftMotor: makeSelectLeftMotor(),
  rightMotor: makeSelectRightMotor(),
});

function getPercentageLabel(value) {
  return value === null ? EMPTY_VALUE : `${Math.round(value)}%`;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LeftPanel);
