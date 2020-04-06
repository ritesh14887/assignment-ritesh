

import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import SearchBox from './SearchBox';
import SortBox from './SortBox';
import palette from '../theme/palette';

const searchPanelStyles = {
  searchPanel: {
    display: 'flex',
    padding: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontFamily: 'PatrickHand',
    '& .search-box': {
      display: 'flex',
      '& input': {
        display: 'flex',
        height: 28,
        width: 200,
        fontFamily: 'PatrickHand',
        fontSize: 16,
        paddingLeft: 10,

      },
      '& button': {
        backgroundColor: palette.primary.blue,
        color: palette.primary.white,
        width: 80,
        fontFamily: 'PatrickHand',
        fontSize: 18,
      },

    },
    '& .sort-box': {
      backgroundColor: palette.primary.white,
      '& select': {
        flex: 1,
        width: 130,
        height: 34,
      },
    },
  },
};
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
