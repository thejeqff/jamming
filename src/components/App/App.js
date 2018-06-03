import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (track.id === this.state.playlistTracks.find(savedTrack => savedTrack.id)) {
      return;
    } else {
      const newPlaylistTracks = this.state.newPlaylistTracks.push(track);
      this.setState({
        playlistTracks: newPlaylistTracks
      })
    }
  }

  removeTrack(track) {
    const newPlaylistTracks = this.state.playlistTracks.filter(!track.id)
    this.setState({
      playlistTracks: newPlaylistTracks
    });
  }

  updatePlaylistName(name) {
    const newName = name;
    this.setState({
      playlistName: newName
    });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(playlistTrack => {
    return playlistTrack.uri;})
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   searchResults: PropTypes.array,
//   onAdd: PropTypes.func,
//   playlistName: PropTypes.string,
//   playlistTracks: PropTypes.array
// }

export default App;
