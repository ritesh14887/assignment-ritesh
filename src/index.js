import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './components/App';
import CharterList from './components/CharactersList';
import store from './store';

const routerConfig = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/charcterlist">
          <CharterList />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

render(routerConfig, document.querySelector('#root'));
