

import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import { paginationStyle } from './styles';


class Pagination extends Component {
  constructor(props) {
    super();
  }

  createPaging = () => {
    const { pagination } = this.props;
    const paging = [];
    for (let i = 1; i <= 25; i += 1) {
      paging.push(i);
    }
    return paging;
  }


handlePageChange = (event) => {
  const { getResults } = this.props;
  getResults('Page', event.target.value);
};

render() {
  const { classes } = this.props;
  return (
    <div className={classes.pagination}>
      {this.createPaging().map(value => (
        <button className="page-link" type="button" value={value} onClick={this.handlePageChange}>{value}</button>
      ))}
    </div>
  );
}
}


export default withStyles(paginationStyle)(Pagination);
