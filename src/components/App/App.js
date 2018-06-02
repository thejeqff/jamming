import React, { Component } from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
      {
        name: "She",
        artist: "Green Day",
        album: "Dookie",
        id:"1"},
      {
        name: "Drifting",
        artist: "Andy McKee",
        album: "Art of Motion",
        id:"2"
      },
      {
        name: "My Curse",
        artist: "Killswtich Engage",
        album: "As Daylight Dies",
        id:"3"
      }],
      playlistName: "My Playlist",
      playlistTracks: [
        {
          name: "She",
          artist: "Green Day",
          album: "Dookie",
          id: "1"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
