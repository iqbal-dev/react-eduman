import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.mainPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate,
  );

const makeFeaturedEventsSelector = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.get('featuredEvent'),
  );
const makeEventsSelector = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.get('events'),
  );

export default makeSelectMainPage;
export { selectMainPageDomain, makeFeaturedEventsSelector, makeEventsSelector };
