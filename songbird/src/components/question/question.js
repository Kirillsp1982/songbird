import React, { Component } from 'react';
import 'materialize-css';

import './question.css';

import SongsBase from '../song-base';

const songsBase = new SongsBase;

export default class Question extends Component {
		
  render() {
  songsBase.setLevel(this.props.level);
  const currentItem = songsBase.getResource()[this.props.songNumber].audio;
  
  return (
      <div className="container row grey darken-3">
      <div className="col s2">
        <img className="responsive-img" src="../../assets/img/guess.jpg" alt="guess"/>
      </div>
      <div className="col s10 white-text center-align">
        <h4>********</h4>
        <div className="divider"></div>
        <div>		
	  <audio
        controls
        autoPlay
        src={ currentItem }>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
		</div>
      </div>
    </div>
    )
  }
}