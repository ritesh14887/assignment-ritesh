import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchCharcters() {
  console.log('fetchCharcters>>>>>>>>>');
  // eslint-disable-next-line no-undef
  const json = yield fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json());
  yield put({ type: 'FETCH_CHARCTER_SUCCESS', data: json });
}
function* actionWatcher() {
  yield takeLatest('FETCH_CHARCTER_BEGIN', fetchCharcters);
}
export default function* rootSaga() {
  console.log('rootsaga');
  yield all([
    actionWatcher(),
  ]);
}
