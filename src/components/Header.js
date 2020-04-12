import React from 'react';
import { withStyles } from 'react-jss';
import { headerStyles } from './styles';


const Header = (props) => {
  const { tagline, classes } = props;
  return (
    <header>
      <h1 className={classes.bannerImage}>
        <span>{tagline}</span>
      </h1>

    </header>

  );
};


export default withStyles(headerStyles)(Header);
