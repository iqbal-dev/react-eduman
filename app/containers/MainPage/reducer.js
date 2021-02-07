/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import { set } from 'lodash';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
  LOAD_EVENTS_SUCCESS,
  LOAD_FEATURES_EVENTS,
  LOAD_FEATURES_EVENTS_ERROR,
  LOAD_FEATURES_EVENTS_SUCCESS,
} from './constants';

export const initialState = {
  featuredEvent: [],
  events: [],
  loading: false,
  error: true,
  loadingFeatured: false,
  errorFeatured: true,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EVENTS:
      console.log('In load event reducer', action);
      return state.set('loading', true).set('error', false);
    case LOAD_EVENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.events);
    case LOAD_EVENTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case LOAD_FEATURES_EVENTS:
      return state.set('loadingFeatured', true).set('errorFeatured', false);
    case LOAD_FEATURES_EVENTS_SUCCESS:
      return state
        .set('loadingFeatured', false)
        .set('errorFeatured', false)
        .set('featuredEvent', action.featuredEvent);
    case LOAD_FEATURES_EVENTS_ERROR:
      return state.set('loadingFeatured', false).set('error', action.error);

    default:
      return state;
  }
};

export default mainPageReducer;
