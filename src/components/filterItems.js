import React, { Component } from 'react';
import { withStyles } from 'react-jss';
import { filterItemStyles } from './styles';


class FilterItem extends Component {
  constructor(props) {
    super();
  }


  render() {
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
