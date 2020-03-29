import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  bannerImage: {
    width: '100%',
  },
});

const Header = (props) => {
  const classes = useStyles();
  const { tagline } = props;
  return (
    <header className={classes.bannerImage}>
      <img
        className={classes.bannerImage}
        src="/images/header.jpg"
        alt="banner"
      />
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>

    </header>

  );
};

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
