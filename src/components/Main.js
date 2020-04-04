import React from 'react';
import { withStyles } from 'react-jss';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import Header from './Header';
import Charcterlist from './CharactersList';
import Filters from './filters';
import palette from '../theme/palette';
import SearchSortPanel from './searchSortPanel';


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
    border: 'solid 1px #ccc',
    overflow: 'hidden',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  charcterContainer: {
    flex: '1 1 75%',
    border: 'solid 1px #ccc',
    marginLeft: '10px',
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  charcterList:
  {
    borderTop: 'solid 1px #ccc',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 5px 0 5px',
    color: '#ffffff',
  },

};

const theme = {
  background: '#ebebeb',
  color: '#24292e',
};
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
    };
  }

  render() {
    const { isLoading, error } = this.state;
    const { classes, charcterData, isloading } = this.props;

    // eslint-disable-next-line no-console
    console.log('render called', charcterData.charcter.charcters);
    return (

      <React.Fragment>
        <Header tagline="Rick and Morty Wiki" />
        <div className={classes.wrapper}>
          <Filters style={classes.filterContainer} />
          <div className={classes.charcterContainer}>
            <SearchSortPanel />
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


export default compose(connect(mapStateToProps), withStyles(appStyles))(Main);
