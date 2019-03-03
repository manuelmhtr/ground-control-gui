/**
 *
 * Map
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapPin from '../MapPin';

const GOOGLE_MAPS_KEY = 'AIzaSyDSGWp4bLSbCOUgakXbIqYx3UNgejeWxr8';

/* eslint-disable react/prefer-stateless-function */
class Map extends React.Component {
  render() {
    const { latitude, longitude, zoom, pinColor, pinSize } = this.props;
    const center = { lat: latitude, lng: longitude };

    const style = {
      backgroundColor: pinColor,
      height: `${pinSize} px`,
      width: `${pinSize} px`,
    };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <MapPin
            lat={latitude}
            lng={longitude}
            color={pinColor}
            size={pinSize}
            style={style}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  pinColor: PropTypes.string.isRequired,
  pinSize: PropTypes.number.isRequired,
};

export default Map;
