

import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="search-wrap">
        <form className="search-box">
          <input type="text" />
          <button type="button">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
