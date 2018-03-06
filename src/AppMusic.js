import React, { Component } from 'react';
import './MusicApp.css';
import Music from './Music';
import data from './data.json';


class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        {...data.artists.map((artist) => {
          <Music artista={artist.name} canciones={artist.canciones} img={artist.img} bio={artist.bio} />
        })}
      </div>
    );
  }
}
export default MusicApp;
