import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Music from './Music';
// import MusicApp from './MusicApp';
import registerServiceWorker from './registerServiceWorker';
const artists = [
    { img: "https://cdn.ciudad.com.ar/sites/default/files/styles/ciu_nota_slider_contenido_hd/public/nota/2018/01/23/shakira.jpg?itok=bO3ivGqh", artista: "Shakira", canciones: ["Loca", "Loba"], bio: "lalalalalalala" },
    { img: "https://cps-static.rovicorp.com/3/JPG_500/MI0001/609/MI0001609908.jpg?partner=allrovi.com", artista: "Selena", canciones: ["Biriribambam", "Wido"], bio: "lelelelelelele" },
    { img: "https://images.clarin.com/2017/07/31/BJXbRhnUW_930x525.jpg", artista: "Romeo Santos", canciones: ["Bella y Sensual", "Odio"], bio: "lilililililili" }
  ];
ReactDOM.render(
React.createElement(Music, {artists}, null), document.getElementById('root'));
registerServiceWorker();
