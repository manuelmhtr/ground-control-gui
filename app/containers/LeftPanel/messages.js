/*
 * LeftPanel Messages
 *
 * This contains all the text for the LeftPanel container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LeftPanel';

export default defineMessages({
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
});
