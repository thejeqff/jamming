import React from 'react';
import './Track.css';

export class Track extends React.Component {
  renderAction() {
    const added = this.props.isRemoval ? <a>-</a> : <a>+</a>;
    return added;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>
        <a className="Track-action">+ or -</a>
      </div>
    )
  }
}
