import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Main from './components/Main';
import CharterList from './components/CharactersList';

const router = (

  <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/charcterlist">
        <CharterList />
      </Route>
    </Switch>
  </Router>

);
render(router, document.querySelector('#root'));
