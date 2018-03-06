import React, { Component } from 'react';
import './Music.css'

class Music extends Component {
  render() {
    const { artista, img, bio } = this.props
    const musicArtis = this.props.canciones.map((cancion, index) => {
      return <li key={index}>{cancion}</li>
    })

    return (
      <div className="music-card">
        <div className="music-card-image">
          <img src={img} alt={artista} />
        </div>
        <div className="music-card-content">
          <h3 className="music-title-artist">{artista}</h3>
          <ul>{musicArtis}</ul>
          <p>{bio}</p>
        </div>
      </div>
    )
  }
}

export default Music;