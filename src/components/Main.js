import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Main extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <Header tagline="RICK AND MORTY Charcters" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/charcterlist">charcterlist</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Main;
