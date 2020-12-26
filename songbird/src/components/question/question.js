import React, { Component } from 'react';
import 'materialize-css';

import './question.css';

import SongsBase from '../song-base';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


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
	  document.querySelector('audio').pause();
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
	      <AudioPlayer
          autoPlay
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          layout="horizontal-reverse"
          src={ currentItem.audio }
        />


		</div>
      </div>
    </div>
    )
  }
}