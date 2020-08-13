import React, { Component } from 'react';

import Header from '../header';
import Question from '../question';
import Content from '../content';
import NextButton from '../next-button';

import './app.css';

const songsInBase = 6;

export default class App extends Component {
	state = {
      level: 0,
      score: 0,
	  id: null,
	  songNumber: Math.floor(Math.random() * (songsInBase - 1)),
    };
	
	render() {
	  return (  
		<div className="grey darken-4 app-wrapper">
		  <Header score={this.state.score} />
		  <Question level={this.state.level} songNumber={this.state.songNumber} />
		  <Content />
		  <NextButton />
		</div>
	  );
    }
}
