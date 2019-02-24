/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: '🚀 Ground Control',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: ' GUI v1.0',
  },
});
