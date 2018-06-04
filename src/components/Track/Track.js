import React from 'react';
import PropTypes from 'prop-types';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    const added = this.props.isRemoval ? <a onClick={this.removeTrack}>-</a> : <a onClick={this.addTrack}>+</a>;
    return added;
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>this.renderAction</a>
      </div>
    )
  }
}

// Track.propTypes = {
//
// }
