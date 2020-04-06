

import React, { Component } from 'react';

class SortBox extends Component {
  constructor(props) {
    super();
  }

  sortCharacters = () => {
    console.log('Search Begin');
  }


  render() {
    return (
      <div className="sort-box">
        <select onChange={this.sortCharacters}>
          <option>Name A-Z</option>
          <option>Name Z-A</option>
        </select>
      </div>
    );
  }
}


export default SortBox;
