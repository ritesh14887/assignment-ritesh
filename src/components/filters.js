import React from 'react';
import { withStyles } from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FilterItem from './filterItems';
import palette from '../theme/palette';

import { fetchFilteredCharcterBegin } from '../actions/actionCreators';

const filterStyles = {
  headingBox: {
    padding: '8px 20px',
    backgroundColor: palette.primary.black,
    margin: '0 0 30px 0',
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    display: 'flex',
    color: palette.primary.white,

    '& .sub-heading': {
      color: ' palette.primary.white',
      flex: '1',
      margin: '0',
    },

  },
  hamburgerItem: {
    display: 'none',
  },
  '@media (max-width: 767px)': {
    headingBox: {
      margin: '0',
    },
    hamburgerItem: {
      display: 'block',
      height: 3,
      width: 25,
      position: 'relative',
      marginTop: 14,
      backgroundColor: palette.primary.white,
      borderRadius: 0,
      '&:before': {
        display: 'block',
        position: 'absolute',
        width: 25,
        height: 3,
        backgroundColor: palette.primary.white,
        left: 0,
        content: '""',
        transform: 'rotate(0)',
        borderRadius: 0,
        top: '-11px',
        transformOrigin: '1px 1px',
      },
      '&:after': {
        display: 'block',
        position: 'absolute',
        width: 25,
        height: 3,
        backgroundColor: palette.primary.white,
        left: 0,
        content: '""',
        transform: 'rotate(0)',
        borderRadius: 0,
        bottom: '-11px',
        transformOrigin: '1px 1px',
      },
    },
  },
  '@media (max-width: 1023px)': {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 10px',
    },
    charcterContainer: {
      margin: 0,
    },
  },
};
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
    console.log('clicked');
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
