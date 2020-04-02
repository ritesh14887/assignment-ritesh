import React, { Component } from 'react';
import { withStyles } from 'react-jss';

const filterItemStyles = {
  categoryTitle: {
    margin: '0',
  },
  categoryBox: {
    borderBottom: '1px solid #a9a9a9',
    margin: '15px 30px',
    '&:last-child': {
      borderBottom: '0',
    },
  },
  filterItem: {
    marginTop: 5,
    listStyle: 'none',
    padding: '0',
    '& input': {
      marginRight: '10px',
    },
    '& li': {
      margin: '2px 10px',
      color: '#a9a9a9',
      fontSize: 20,
    },
  },

};

class FilterItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(props) {
    const { filter, classes } = this.props;
    return (
      <div className={classes.categoryBox}>
        <h3 className={classes.categoryTitle}>{filter.filterName}</h3>
        <ul className={classes.filterItem}>
          {
                        filter.filterKeys.map((filterKey, index) => (
                          <li>
                            <input type="radio" name={filter.filterName} />
                            <span className="icon" />
                            {filterKey.name}
                          </li>
                        ))
                    }
        </ul>
      </div>
    );
  }
}
export default withStyles(filterItemStyles)(FilterItem);
