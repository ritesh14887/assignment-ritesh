import React from 'react';
import { createUseStyles } from 'react-jss';
import palette from '../theme/palette';

const maxWidth = 767;
const headerStyles = createUseStyles({
  bannerImage: {
    width: '100%',
    fontFamily: 'Giffy',
    padding: '30px 0 0 0',
    fontSize: 60,
    margin: 0,
    textAlign: 'center',
    color: palette.primary.white,
    backgroundColor: palette.primary.black,
  },
  '@media (max-width: 767px)': {
    bannerImage: {
      fontSize: 30,
      padding: '10px 0 0 0',
    },
  },
  '@media (max-width: 1023px)': {
    bannerImage: {
      fontSize: 30,
      padding: '10px 0 0 0',
    },
  },

});

const Header = (props) => {
  const classes = headerStyles();
  const { tagline } = props;
  return (
    <header>
      <h1 className={classes.bannerImage}>
        <span>{tagline}</span>
      </h1>

    </header>

  );
};


export default Header;
