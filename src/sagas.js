import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchCharcters(param) {
  const query = param.data || '';
  // eslint-disable-next-line no-undef
  const json = yield fetch(`https://rickandmortyapi.com/api/character/${query}`)
    .then(response => response.json());
  yield put({ type: 'FETCH_CHARCTER_SUCCESS', data: json });
}

function* actionWatcher() {
  yield takeLatest('FETCH_CHARCTER_BEGIN', fetchCharcters);
  yield takeLatest('FETCH_FILTERED_CHARCTER_BEGIN', fetchCharcters);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
