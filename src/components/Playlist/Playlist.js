import React from 'react';
import {TrackList} from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist from React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value={"New Playlist"}/>
        // <TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
