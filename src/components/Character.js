import React from 'react';
import { withStyles } from 'react-jss';


const charcterStyles = {
  charcter: {
    width: 'calc(25% - 20px)',
    border: 'solid 1px #6c2525',
    boxShadow: '0 0 15px 0px #ff000061',
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: '#333333',
    '& .image-box': {
      borderBottom: 'solid 1px #ccc',
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
          color: '#fff',
          margin: '10px 0 0 0',
          fontSize: '16px',
        },
        '& .id': {
          color: '#fff',
          margin: '10px 0 10px 0',
          fontSize: '12px',
        },
      },

    },
    '& .item-detail': {
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 5px 4px 5px',
      borderBottom: 'solid 1px #444444',
      padding: '6px 0 6px 0',
      alignItems: 'center',
      '& .title ': {
        color: '#9b9b9b',
      },
      '& .description': {
        color: ' #e78c0c',
      },

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
