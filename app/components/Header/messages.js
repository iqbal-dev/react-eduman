/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  token: {
    id: `${scope}.token`,
    defaultMessage: 'Token',
  },
  dashboards: {
    id: `${scope}.dashboards`,
    defaultMessage: 'Dashboard',
  },
});
