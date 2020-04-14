import React from 'react';
import { withStyles } from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import Charcterlist from './CharactersList';
import Filters from './filters';
import { appStyles } from './styles';
import SearchSortPanel from './searchSortPanel';
import { fetchFilteredCharcterBegin } from '../actions/actionCreators';
import Pagination from './pagination';


class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filtersData: {
        species: '',
        gender: '',
        status: '',
        name: '',
        page: '1',
      },
    };
  }

  getResults = (keyword, value) => {
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
    } else if (keyword === 'Page') {
      filtersData.page = value;
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
    const { classes, appData } = this.props;
    console.log(appData.charcter.info, typeof (appData.charcter.info));
    return (

      <React.Fragment>
        <Header tagline="Rick and Morty Wiki" />
        <div className={classes.wrapper}>
          <Filters getResults={this.getResults} filtersData={this.filtersData} style={classes.filterContainer} />
          <div className={classes.charcterContainer}>

            <SearchSortPanel getResults={this.getResults} filtersData={this.filtersData} />
            <div className={classes.charcterList}>
              {!appData.isloading && appData.charcter.charcters
                ? <Charcterlist charcters={appData.charcter.charcters} />
                : <h3>Loading...</h3>}
            </div>
            <Pagination getResults={this.getResults} pagedata={appData.charcter.info} filtersData={this.filtersData} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    appData: state,
  };
}
const mapDispatchToProps = dispatch => ({
  fectchFilteredData: (data) => {
    dispatch(fetchFilteredCharcterBegin(data));
  },

});


export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(appStyles))(Main);
