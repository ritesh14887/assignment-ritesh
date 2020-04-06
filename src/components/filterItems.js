import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import palette from '../theme/palette';

const filterItemStyles = {
  categoryTitle: {
    margin: '0',
  },
  categoryBox: {
    borderBottom: '1px solid palette.primary.lightGrey',
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
      color: palette.primary.lightGrey,
      fontSize: 20,
    },
  },

};

class FilterItem extends Component {
  constructor(props) {
    super();
  }


  render(props) {
    const { filter, classes, handleChange } = this.props;
    return (
      <div className={`${classes.categoryBox} category-box`}>
        <h3 className={classes.categoryTitle}>{filter.filterName}</h3>
        <ul className={classes.filterItem}>
          {
                        filter.filterKeys.map((filterKey, index) => (
                          <li>
                            <input
                              type="radio"
                              name={filter.filterName}
                              value={filterKey.key}
                              onChange={handleChange}
                            />
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
