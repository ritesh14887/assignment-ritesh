import React from 'react';
import { withStyles } from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FilterItem from './filterItems';
import { filterStyles } from './styles';

import { fetchFilteredCharcterBegin } from '../actions/actionCreators';


class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersOpened: true,
    };
    this.filters = [{

      filterName: 'Gender',
      filterKeys: [{
        name: 'Male',
        key: 'male',
      }, {
        name: 'Female',
        key: 'female',
      }, {
        name: 'Genderless',
        key: 'genderless',
      },
      {
        name: 'Unknown',
        key: 'unknown',
      },
      {
        name: 'All',
        key: '',
      }],
    }, {

      filterName: 'Status',
      filterKeys: [{
        name: 'Alive',
        key: 'alive',
      }, {
        name: 'Dead',
        key: 'dead',
      }, {
        name: 'Unknown',
        key: 'unknown',
      },
      {
        name: 'All',
        key: '',
      }],
    }, {

      filterName: 'Species',
      filterKeys: [{
        name: 'Human',
        key: 'human',
      }, {
        name: 'Mytholog',
        key: 'mytholog',
      },
      {
        name: 'Alien',
        key: 'alien',
      },
      {
        name: 'All',
        key: '',
      }],
    }];
  }

  handleFilterChange = (event) => {
    const { getResults } = this.props;
    getResults(event.target.name, event.target.value);
  }

  handleFiltersMobile = () => {
    const { filtersOpened } = this.state;
    this.setState({ filtersOpened: !filtersOpened });
  }


  render() {
    const { style, classes } = this.props;
    const { filtersOpened } = this.state;
    return (
      <aside className={filtersOpened ? `${style}` : `${style} no-filter`}>
        <div className={classes.headingBox}>
          <h2 className="sub-heading">Filters</h2>
          <button type="button" className={classes.hamburgerItem} onClick={this.handleFiltersMobile} />
        </div>
        {
            // eslint-disable-next-line no-shadow
            this.filters.map((currentFilter, index) => <FilterItem handleChange={this.handleFilterChange} filter={currentFilter} />)
        }
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fectchFilteredData: (data) => {
    dispatch(fetchFilteredCharcterBegin(data));
  },

});
export default compose(connect(null, mapDispatchToProps), withStyles(filterStyles))(Filters);
