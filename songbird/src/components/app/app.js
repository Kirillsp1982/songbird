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
	  songNumber: Math.floor(Math.random() * songsInBase),
	  selectedItem: null,
	  answersList: [
	  { id: 1, name: 'Drink Coffee', icon: 'mood', isActive: true },
	  { id: 2, name: 'Learn React', icon: 'mood_bad', isActive: true }, 
      { id: 3, name: 'Make Awesome App', icon: 'help_outline', isActive: true }, 
	  { id: 4, name: 'Make Awesome App', icon: 'mood', isActive: true }, 
	  { id: 5, name: 'Make Awesome App', icon: 'mood_bad', isActive: true }, 
	  { id: 6, name: 'Make Awesome App', icon: 'help_outline', isActive: true }, 
	  ]
    };

	onSelectItem = (id) => {
    this.setState({
      selectedItem: id
    });
  };
  
	render() {
		console.log(this.state.selectedItem);
	  return (  
		<div className="grey darken-4">
		  <Header score={this.state.score} />
		  <Question level={this.state.level} songNumber={this.state.songNumber} />
		  <Content onSelectItem={this.onSelectItem} selectedItem={this.state.selectedItem} answersList={this.state.answersList}/>
		  <NextButton />
		</div>
	  );
    }
}
