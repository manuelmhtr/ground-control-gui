/*
 * LeftPanel Messages
 *
 * This contains all the text for the LeftPanel container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LeftPanel';

export default defineMessages({
  batterySeparator: {
    id: `${scope}.batterySeparator`,
    defaultMessage: 'Battery',
  },
  batteryPower: {
    id: `${scope}.batteryPower`,
    defaultMessage: 'Power',
  },
  batteryVoltage: {
    id: `${scope}.batteryVoltage`,
    defaultMessage: 'Voltage',
  },
  motorsSeparator: {
    id: `${scope}.motorsSeparator`,
    defaultMessage: 'Motors status',
  },
  leftMotorSpeed: {
    id: `${scope}.leftMotorSpeed`,
    defaultMessage: 'Left motor speed',
  },
  rightMotorSpeed: {
    id: `${scope}.rightMotorSpeed`,
    defaultMessage: 'Right motor speed',
  },
  locationSeparator: {
    id: `${scope}.locationSeparator`,
    defaultMessage: 'Location',
  },
  locationLatitude: {
    id: `${scope}.locationLatitude`,
    defaultMessage: 'Latitude',
  },
  locationLongitude: {
    id: `${scope}.locationLongitude`,
    defaultMessage: 'Longitude',
  },
});
