

import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import { paginationStyle } from './styles';


class Pagination extends Component {
  constructor(props) {
    super();
  }


handlePageChange = (event) => {
  const { getResults } = this.props;
  getResults('Page', event.target.value);
};


createPaging = (pages) => {
  const paging = [];
  for (let i = 1; i <= pages; i += 1) {
    paging.push(i);
  }
  return paging;
}


render() {
  const { pagedata, classes } = this.props;

  return (
    <React.Fragment>
      {pagedata
    && (
    <div className={classes.pagination}>
      {this.createPaging(pagedata.pages).map(value => (
        <button className="page-link" type="button" value={value} onClick={this.handlePageChange}>{value}</button>
      ))}
    </div>
    )
      }
    </React.Fragment>
  );
}
}


export default withStyles(paginationStyle)(Pagination);
