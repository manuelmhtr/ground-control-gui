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

import { makeSelectLeftMotor, makeSelectRightMotor } from './selectors';
import Header from '../../components/Header';
import Cell from '../../components/Cell';
import CellSeparator from '../../components/CellSeparator';
import './styles.css';

import messages from './messages';

const EMPTY_VALUE = '-';
const PRIMARY_COLOR = '#2e8aff';
const BLACK_COLOR = '#000';

/* eslint-disable react/prefer-stateless-function */
export class LeftPanel extends React.Component {
  render() {
    const leftMotor = calculateMotorData(this.props.leftMotor);
    const rightMotor = calculateMotorData(this.props.rightMotor);

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
          levelColor={leftMotor.speedColor}
        />
        <Cell
          title={<FormattedMessage {...messages.rightMotorSpeed} />}
          value={rightMotor.speedLabel}
          levelValue={rightMotor.speedValue}
          levelColor={rightMotor.speedColor}
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

function calculateMotorData(params) {
  const { speed = null } = params || {};

  return {
    speedValue: speed,
    speedLabel: getPercentageLabel(speed),
    speedColor: speed >= 0 ? PRIMARY_COLOR : BLACK_COLOR,
  };
}

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
