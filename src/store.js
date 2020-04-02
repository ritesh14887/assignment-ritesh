import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import the root reducer
import rootReducer from './reducers/index';


// Initial State
const intialState = {
  charcter: [],
  info: {},
};

const store = createStore(rootReducer, intialState, composeWithDevTools());
// eslint-disable-next-line no-console
export default store;
