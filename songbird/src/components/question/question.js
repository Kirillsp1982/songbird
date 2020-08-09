import React, { Component } from 'react';
import 'materialize-css';

import './question.css';

import SongsBase from '../song-base';

const songsBase = new SongsBase;

export default class Question extends Component {
	state = {
    selectedItem: songsBase.getResource(2)[5].audio,
  };
	
  render() {
	const { selectedItem } = this.state;
	console.log(selectedItem);
    return (
      <div className="container row grey darken-3">
      <div className="col s2">
        <img className="responsive-img" src="https://i.pinimg.com/originals/16/fd/18/16fd18892bd75297e8afef1de3709f88.jpg" alt="bird"/>
      </div>
      <div className="col s10 white-text center-align">
        <h4>********</h4>
        <div className="divider"></div>
        <div>		
	  <audio
        controls
        src={ selectedItem }>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
		</div>
      </div>
    </div>
    )
  }
}