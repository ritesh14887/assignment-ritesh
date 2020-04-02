

import React, { Component } from 'react';

class SortBox extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="sort-box">
        <select>
          <option>Name A-Z</option>
          <option>Name Z-A</option>
        </select>
      </div>
    );
  }
}

export default SortBox;
