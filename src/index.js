import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CharterList from './components/CharactersList';
import store from './store';
import Main from './components/Main';
import { fetchCharcterInfoBegin } from './actions/actionCreators';

function onAppInit(dispatch) {
  dispatch(fetchCharcterInfoBegin());
}

const routerConfig = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          onEnter={onAppInit(store.dispatch)}
        >
          <Main />
        </Route>
        <Route path="/charcterlist">
          <CharterList />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

render(routerConfig, document.querySelector('#root'));
