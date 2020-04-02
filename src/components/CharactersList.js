

import React from 'react';
import Character from './Character';

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { charcters } = this.props;
    return (
      charcters.map((item, key) => <Character charcter={item} />)
    );
  }
}

export default CharactersList;
