/**
 *
 * MainPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { loadFeaturedEvent, loadEvents } from './actions';
import { makeFeaturedEventsSelector, makeEventsSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });
  loadEvents('121212', 15, 0, '');
  featuredEvents('121', 10, 2);
  const featuredEvents = { ...props.featuredEvent };
  console.log(featuredEvents);

  return (
    <div>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MainPage.propTypes = {
  featuredEvent: PropTypes.array,
  events: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  featuredEvent: makeFeaturedEventsSelector(),
  events: makeEventsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: (tenantId, skip, take, searchTerm) =>
      dispatch(loadEvents(tenantId, skip, take, searchTerm)),
    loadFeaturedEvent: (tenantId, skip, take) =>
      dispatch(loadFeaturedEvent(tenantId, skip, take)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
