import React from 'react';
import PropTypes from 'prop-types';
import {TrackList} from '../TrackList/TrackList';
import './SearchResults.css';

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}/>
      </div>
    )
  }
}

// SearchResults.propTypes = {
//   tracks: PropTypes.array,
//   onAdd: PropTypes.func,
//   isRemoval: PropTypes.bool
// }
