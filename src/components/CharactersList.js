

import React from 'react';
import Character from './Character';

const CharactersList = (props) => {
  const { charcters } = props;
  return (
    charcters.map((item, key) => <Character charcter={item} />)
  );
};

export default CharactersList;
