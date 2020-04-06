

import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super();
    this.state = {
      searchKeyword: '',
    };
  }

  setSearchKeywordValue = (event) => {
    this.setState({ searchKeyword: event.target.value });
  }

  handleButtonCick = () => {
    const { getResults } = this.props;
    const { searchKeyword } = this.state;
    getResults('Name', searchKeyword);
  }

  render() {
    return (
      <div className="search-wrap">
        <form className="search-box">
          <input type="text" onChange={this.setSearchKeywordValue} />
          <button type="button" onClick={this.handleButtonCick}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
