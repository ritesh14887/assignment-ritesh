import { combineReducers } from 'redux';

import charcterReducer from './charcter';

const rootReducer = combineReducers({
  charcter: charcterReducer,
});

export default rootReducer;
