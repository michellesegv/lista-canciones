import React, { Component } from 'react';
import './Music.css'

class Music extends Component {
  render() {

    const artistas = React.Children.map(this.props.children,
      (child) => {
        console.log(child);
        // const musicArtis = child.canciones.map((cancion, index) => {
        //   return <li key={index}>{cancion}</li>
        // })
        return (
          <div className="music-card">
            <div className="music-card-image">
              <img src={child.img} alt={child.artista} />
            </div>
            <div className="music-card-content">
              <h3 className="music-title-artist">{child.artista}</h3>
              {/* <ul>{musicArtis}</ul> */}
              <p>{child.bio}</p>
            </div>
          </div>
        );
      }
    );
    return {artistas}
  }
}

export default Music;