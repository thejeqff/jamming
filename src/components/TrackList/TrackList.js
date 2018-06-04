import React from 'react';
import PropTypes from 'prop-types';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    let tracks;
    if (typeof this.props.tracks === 'object') {
      tracks = this.props.tracks;
    } else {
      tracks = [];
    }
    return (
      <div className="TrackList">
        {
        tracks.map(track => {
          return <Track
          track={track}
          key={track.id}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
          />
        })
      }
      </div>
    )
  }
}

// TrackList.propTypes = {
//   tracks: PropTypes.array,
//   track: PropTypes.object,
//   key: PropTypes.string,
//   onAdd: PropTypes.func
// }
