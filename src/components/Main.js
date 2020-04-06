import React from 'react';
import { withStyles } from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import Charcterlist from './CharactersList';
import Filters from './filters';
import palette from '../theme/palette';
import SearchSortPanel from './searchSortPanel';
import { fetchFilteredCharcterBegin } from '../actions/actionCreators';

const maxWidth = 767;

const appStyles = {
  '@font-face': [{
    fontFamily: 'PatrickHand',
    src: 'url(/fonts/PatrickHand-Regular.ttf)',
  },
  {
    fontFamily: 'Giffy',
    src: 'url(/fonts/Griffy-Regular.ttf)',
  }],
  wrapper: {
    fontFamily: 'PatrickHand',
    background: palette.primary.black,
    margin: '0 auto',
    display: 'flex',
    padding: '20px 100px',


  },
  filterContainer: {
    flex: '1 1 25%',
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    overflow: 'hidden',
    backgroundColor: palette.primary.black,
    color: palette.primary.white,
    '&.no-filter': {
      '& .category-box': {
        display: 'none',
      },
    },
  },
  charcterContainer: {
    flex: '1 1 75%',
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    marginLeft: '10px',
    backgroundColor: palette.primary.black,
    overflow: 'hidden',
  },
  charcterList: {
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 5px 0 5px',
    color: palette.primary.white,
  },
  '@media (max-width: 767px)': {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 10px',
    },
    charcterContainer: {
      margin: 0,
    },
  },
  '@media (max-width: 1023px)': {
    wrapper: {
      display: 'flex',
      padding: '10px 10px',
    },
    charcterContainer: {
      margin: 0,
    },
  },

};

const theme = {
  background: palette.primary.lightestGrey,
  color: '#24292e',
};


class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filtersData: {
        species: '',
        gender: '',
        status: '',
        name: '',
      },
    };
  }

  getResults = (keyword, value) => {
    console.log(keyword, value);
    const { filtersData } = this.state;
    const { fectchFilteredData } = this.props;
    let queryParam = '?';
    if (keyword === 'Gender') {
      filtersData.gender = value;
    } else if (keyword === 'Status') {
      filtersData.status = value;
    } else if (keyword === 'Species') {
      filtersData.species = value;
    } else if (keyword === 'Name') {
      filtersData.name = value;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const key in filtersData) {
      if (Object.prototype.hasOwnProperty.call(filtersData, key)) {
        queryParam = `${queryParam}${key}=${filtersData[key]}&`;
      }
    }
    fectchFilteredData(queryParam);
  };

  render() {
    const { classes, charcterData } = this.props;

    return (

      <React.Fragment>
        <Header tagline="Rick and Morty Wiki" />
        <div className={classes.wrapper}>
          <Filters getResults={this.getResults} filtersData={this.filtersData} style={classes.filterContainer} />
          <div className={classes.charcterContainer}>
            <SearchSortPanel getResults={this.getResults} filtersData={this.filtersData} />
            <div className={classes.charcterList}>
              {!charcterData.isloading && charcterData.charcter.charcters
                ? <Charcterlist charcters={charcterData.charcter.charcters} />
                : <h3>Loading...</h3>}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Main.defaultProps = {
  isloading: true,
};

function mapStateToProps(state) {
  console.log('state', state);
  return {
    charcterData: state,
  };
}
const mapDispatchToProps = dispatch => ({
  fectchFilteredData: (data) => {
    dispatch(fetchFilteredCharcterBegin(data));
  },

});


export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(appStyles))(Main);
