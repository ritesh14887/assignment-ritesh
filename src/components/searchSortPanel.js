

import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import SearchBox from './SearchBox';
import { searchPanelStyles } from './styles';


class SearchBar extends Component {
  constructor(props) {
    super();
  }


  render() {
    const { classes, getResults } = this.props;
    return (
      <div className={classes.searchPanel}>
        <SearchBox getResults={getResults} />
        {/* <SortBox /> */}
      </div>
    );
  }
}

export default withStyles(searchPanelStyles)(SearchBar);
