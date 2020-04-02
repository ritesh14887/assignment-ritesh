import React from 'react';
import { createUseStyles } from 'react-jss';

const headerStyles = createUseStyles({
  bannerImage: {
    width: '100%',
    fontFamily: 'Giffy',
    padding: '30px 0 0 0',
    fontSize: 60,
    margin: 0,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#000',
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
