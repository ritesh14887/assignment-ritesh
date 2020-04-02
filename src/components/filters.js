import React from 'react';
import { withStyles } from 'react-jss';
import FilterItem from './filterItems';
import palette from '../theme/palette';

const filterStyles = {
  headingBox: {
    padding: '20px',
    backgroundColor: '#eee',
    margin: '0 0 30px 0',
    borderBottom: 'solid 1px #ccc',
    display: 'flex',
    color: '#ffffff',

    '& .sub-heading': {
      color: ' #999',
      flex: '1',
      margin: '0',
    },

  },

};
class Filters extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.filters = [{

      filterName: 'Gender',
      filterKeys: [{
        name: 'Male',
      }, {
        name: 'Female',
      }, {
        name: 'Genderless',
      },
      {
        name: 'Unknown',
      },
      {
        name: 'All',
      }],
    }, {

      filterName: 'Status',
      filterKeys: [{
        name: 'Alive',
      }, {
        name: 'Dead',
      }, {
        name: 'Unknown',
      },
      {
        name: 'All',
      }],
    }, {

      filterName: 'Species',
      filterKeys: [{
        name: 'Human',
      }, {
        name: 'Mytholog',
      },
      {
        name: 'Alien',
      },
      {
        name: 'All',
      }],
    }];
  }

  render() {
    const { style, classes } = this.props;
    return (
      <aside className={style}>
        <div className={classes.headingBox}>
          <h2 className="sub-heading">Filters</h2>
        </div>
        {
            // eslint-disable-next-line no-shadow
            this.filters.map((currentFilter, index) => <FilterItem filter={currentFilter} />)
        }
      </aside>
    );
  }
}
export default withStyles(filterStyles)(Filters);
