import React, { Component } from 'react';
import 'materialize-css';

import './question.css';

import SongsBase from '../song-base';

const songsBase = new SongsBase;

export default class Question extends Component {
  
  render() {
  songsBase.setLevel(this.props.level);
  const currentItem = songsBase.getResource()[this.props.songNumber];
  
  const isGuessed = this.props.isGuessed;
    let songName,
	    songImg;
    if (isGuessed) {
      songName = <h4>{currentItem.name}</h4>;
	  songImg = currentItem.image;
    } else {
      songName = <h4>********</h4>;
	  songImg = '../../assets/img/guess.jpg';
    }
	
  return (
      <div className="container row grey darken-3">
      <div className="col s2">
        <img className="responsive-img" src={songImg} alt="guess"/>
      </div>
      <div className="col s10 white-text center-align">
	  {songName}
        <div className="divider"></div>
        <div>		
	  <audio
        controls
        autoPlay
        src={ currentItem.audio }>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
		</div>
      </div>
    </div>
    )
  }
}