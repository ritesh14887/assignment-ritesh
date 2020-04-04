
import 'regenerator-runtime/runtime';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
// import the root reducer
import rootReducer from './reducers/index';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
