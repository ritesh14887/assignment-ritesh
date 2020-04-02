

import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import SearchBox from './SearchBox';
import SortBox from './SortBox';

const searchPanelStyles = {
  searchPanel: {
    display: 'flex',
    padding: 15,
    borderTop: 'solid 1px #ccc',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontFamily: 'PatrickHand',
    '& .search-box': {
      display: 'flex',
      '& input': {
        display: 'flex',
        height: 28,
        width: 200,
      },
      '& button': {
        backgroundColor: '#e32f2f',
        color: '#fff',
        width: 80,
      },

    },
    '& select': {
      flex: 1,
      width: 130,
      height: 34,
    },
  },
};
class SearchBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.searchPanel}>
        <SearchBox />
        <SortBox />
      </div>
    );
  }
}

export default withStyles(searchPanelStyles)(SearchBar);
