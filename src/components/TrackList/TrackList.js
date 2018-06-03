import React from 'react';
import PropTypes from 'prop-types';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
        this.props.tracks.map(track => {
          return <Track
          track={track}
          key={track.id}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}/>
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
