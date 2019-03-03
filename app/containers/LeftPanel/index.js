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
  makeSelectBattery,
  makeSelectLeftMotor,
  makeSelectRightMotor,
  makeSelectLocation,
} from './selectors';
import Header from '../../components/Header';
import Cell from '../../components/Cell';
import CellSeparator from '../../components/CellSeparator';
import Map from '../../components/Map';
import './styles.css';

import messages from './messages';

const EMPTY_VALUE = '-';
const PRIMARY_COLOR = '#2e8aff';
const SUCCESS_COLOR = '#10cc29';
const WARNING_COLOR = '#ffc71d';
const DANGER_COLOR = '#ff0706';
const BLACK_COLOR = '#000';

/* eslint-disable react/prefer-stateless-function */
export class LeftPanel extends React.Component {
  getMap() {
    const { latitude, longitude } = this.props.location || {};
    if (!isNumber(latitude) || !isNumber(longitude)) return null;
    return (
      <div id="map-container">
        <Map
          latitude={latitude}
          longitude={longitude}
          zoom={16}
          pinColor={PRIMARY_COLOR}
          pinSize={14}
        />
      </div>
    );
  }

  render() {
    const battery = calculateBatteryData(this.props.battery);
    const leftMotor = calculateMotorData(this.props.leftMotor);
    const rightMotor = calculateMotorData(this.props.rightMotor);
    const location = calculateLocationData(this.props.location);

    return (
      <div id="left-panel">
        <div>
          <Header />
          <CellSeparator
            text={<FormattedMessage {...messages.batterySeparator} />}
          />
          <Cell
            title={<FormattedMessage {...messages.batteryPower} />}
            value={battery.percentageStr}
            levelValue={battery.percentage}
            levelColor={battery.color}
          />
          <Cell
            title={<FormattedMessage {...messages.batteryVoltage} />}
            value={battery.voltage}
          />
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
          <CellSeparator
            text={<FormattedMessage {...messages.locationSeparator} />}
          />
          <Cell
            title={<FormattedMessage {...messages.locationLatitude} />}
            value={location.latitude}
          />
          <Cell
            title={<FormattedMessage {...messages.locationLongitude} />}
            value={location.longitude}
          />
        </div>
        {this.getMap()}
      </div>
    );
  }
}

LeftPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  battery: makeSelectBattery(),
  leftMotor: makeSelectLeftMotor(),
  rightMotor: makeSelectRightMotor(),
  location: makeSelectLocation(),
});

function calculateBatteryData(params) {
  const { percentage = null, voltage = null } = params || {};

  return {
    percentage,
    percentageStr: getNumberLabel(percentage, 0, '%'),
    color: getBatteryColor(percentage),
    voltage: getNumberLabel(voltage, 2, 'v'),
  };
}

function calculateLocationData(params) {
  const { latitude, longitude } = params || {};

  return {
    latitude: getNumberLabel(latitude, 6, '°'),
    longitude: getNumberLabel(longitude, 6, '°'),
  };
}

function getBatteryColor(percentage) {
  if (percentage > 40) return SUCCESS_COLOR;
  if (percentage > 20) return WARNING_COLOR;
  return DANGER_COLOR;
}

function calculateMotorData(params) {
  const { speed = null } = params || {};

  return {
    speedValue: speed,
    speedLabel: getNumberLabel(speed, 0, '%'),
    speedColor: speed >= 0 ? PRIMARY_COLOR : BLACK_COLOR,
  };
}

function getNumberLabel(value, decimals = 0, sufix = '') {
  if (!isNumber(value)) return EMPTY_VALUE;
  const factor = 10 ** decimals;
  const rounded = Math.round(value * factor) / factor;
  return `${rounded.toFixed(decimals)}${sufix}`;
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
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
