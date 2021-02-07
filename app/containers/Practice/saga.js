import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MEMBERS } from 'containers/App/constants';
import { membersLoaded, membersError } from 'containers/App/actions';

export function* getMembers() {
  const requestURL = `https://api.neticms.com/speech/info/list?cmsId=4`;
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(membersLoaded(data.item));
  } catch (err) {
    yield put(membersError(err));
  }
}
// Individual exports for testing
export default function* getMembersData() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_MEMBERS, getMembers);
}
