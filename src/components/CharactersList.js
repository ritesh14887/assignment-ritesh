

import React, { Component } from 'react';
import Header from './Header';

class CharactersList extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (

      <div className="characters-list">
        <Header tagline="RICK AND MORTY Charcters" />
        Charterlist
      </div>
    );
  }
}

export default CharactersList;
