/*
 *
 * MainPage actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
  LOAD_EVENTS_SUCCESS,
  LOAD_FEATURES_EVENTS,
  LOAD_FEATURES_EVENTS_ERROR,
  LOAD_FEATURES_EVENTS_SUCCESS,
} from './constants';

export function loadEvents(tenantId, skip, take, searchTerm) {
  console.log('In Load Event Action', tenantId);
  return {
    type: LOAD_EVENTS,
    tenantId,
    skip,
    take,
    searchTerm,
  };
}

export function loadEventsSuccess(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

export function loadEventsError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}

export function laodFeaturedEvent(tenantId, skip, take) {
  return {
    type: LOAD_FEATURES_EVENTS,
    tenantId,
    skip,
    take,
  };
}

export function loadFeaturedEventSuccess(featuredEvent) {
  return {
    type: LOAD_FEATURES_EVENTS_SUCCESS,
    featuredEvent,
  };
}

export function loadFeaturedError(error) {
  return {
    type: LOAD_FEATURES_EVENTS_ERROR,
    error,
  };
}
