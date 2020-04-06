import React from 'react';
import { withStyles } from 'react-jss';
import palette from '../theme/palette';

const maxWidth = 767;
const charcterStyles = {
  charcter: {
    width: 'calc(25% - 20px)',
    border: 'solid 1px #0057ff57',
    boxShadow: '0 0 15px 0px #3955ffa1',
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: palette.primary.charcoal,
    '& .image-box': {
      borderBottom: `'solid 1px' ${palette.primary.silver}`,
      position: 'relative',
      marginBottom: '10px',
      minHeight: '200px',
      '& .character-pic': {
        width: '100%',
        display: 'block',
      },
      '& .details-overlay': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '0 10px',
        '& .name': {
          color: palette.primary.white,
          margin: '10px 0 0 0',
          fontSize: '16px',
        },
        '& .id': {
          color: palette.primary.white,
          margin: '10px 0 10px 0',
          fontSize: '12px',
        },
      },

    },
    '& .item-detail': {
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 5px 4px 5px',
      borderBottom: 'solid 1px #444444',
      padding: '6px 0 6px 0',
      alignItems: 'center',
      '& .title ': {
        color: '#d1d1d1',
      },
      '& .description': {
        color: ' #e78c0c',
        fontWeight: 700,
      },

    },

  },


  '@media (max-width: 1023px)': {
    charcter: {
      width: 'calc(33% - 16px)',
      marginLeft: 10,
      marginBottom: 10,
    },
  },
  '@media (max-width: 767px)': {
    charcter: {
      width: 'calc(50% - 16px)',
      marginLeft: 10,
      marginBottom: 10,
    },
  },

};

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { charcter, classes } = this.props;
    return (
      <div className={classes.charcter}>
        <div className="image-box">
          <img className="character-pic" alt={charcter.name} src={charcter.image} />
          <div className="details-overlay">
            <p className="name">{charcter.name}</p>
            <p className="id">
              {charcter.id}
              {' '}
    -
              {' '}
              {charcter.created}
            </p>
          </div>
        </div>
        <p className="item-detail">
          <span className="title">Status</span>
          <span className="description">{charcter.status}</span>
        </p>
        <p className="item-detail">
          <span className="title">Species</span>
          <span className="description">{charcter.species}</span>
        </p>
        <p className="item-detail">
          <span className="title">Gender</span>
          <span className="description">{charcter.gender}</span>
        </p>
        <p className="item-detail">
          <span className="title">Origin</span>
          <span className="description">{charcter.origin.name}</span>
        </p>
        <p className="item-detail">
          <span className="title">Last Location</span>
          <span className="description">{charcter.location.name}</span>
        </p>
      </div>

    );
  }
}

export default withStyles(charcterStyles)(Character);
