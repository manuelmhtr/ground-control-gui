/**
 *
 * MapPin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class MapPin extends React.Component {
  render() {
    const { color, size } = this.props;

    const pinStyle = {
      position: 'absolute',
      backgroundColor: color,
      width: size,
      height: size,
      left: -size / 2,
      top: -size / 2,
      borderRadius: size,
      border: '2px solid #fff',
    };

    return <div style={pinStyle} />;
  }
}

MapPin.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default MapPin;
