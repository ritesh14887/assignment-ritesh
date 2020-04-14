

import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import SearchBox from './SearchBox';
import { searchPanelStyles } from './styles';


const SearchBar = (props) => {
  const { classes, getResults } = props;
  return (
    <div className={classes.searchPanel}>
      <SearchBox getResults={getResults} />
    </div>
  );
};

export default withStyles(searchPanelStyles)(SearchBar);
