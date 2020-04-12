import React from 'react';
import { withStyles } from 'react-jss';
import { charcterStyles } from './styles';


class Character extends React.Component {
  constructor(props) {
    super();
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
