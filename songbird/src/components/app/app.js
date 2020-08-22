import React, { Component } from 'react';

import Header from '../header';
import Question from '../question';
import Content from '../content';
import NextButton from '../next-button';
import SongBase from '../song-base'

import './app.css';

const songsInBase = 6;
const songBase = new SongBase;
const buttonsList = songBase.getResource();
export default class App extends Component {
	state = {
      level: 0,
      score: 0,
	  songNumber: Math.floor(Math.random() * songsInBase),
	  selectedItem: null,
	  answersList: []
    };

	
	  onUnActive = (id) => {
		this.setState((state) => {
		const arr = state.answersList;  
		const idx = arr.findIndex((item) => item.id === id);
		let icon = arr[idx].icon;
		if (arr[idx].isActive) {
			icon = this.onChangeIcon(arr[idx].isActive, id);
		}
		let item = { ...arr[idx], icon: icon, isActive: false } ;
		const answersList = [
		  ...arr.slice(0, idx),
		  item,
		  ...arr.slice(idx + 1)
		];
		  return {answersList};
		});
	  };

	onSelectItem = (id) => {
    this.setState((state) => {
      return {selectedItem: id}
	});
	this.onUnActive(id);
  };
  
  onChangeIcon = (isActive, id) => {
	let icon = (id === this.state.songNumber) ? 'mood' : 'mood_bad';
	return icon;
  };

  componentWillMount() {
    

    const items = this.createItems(buttonsList);
	
	this.setState({
	  answersList: items,
	});
  }

  createItems = (arr) => {
    return arr.map(({id, name}) => {
      return (
		{ id: id, name: name, icon: 'help_outline', isActive: true }
      );
    });
  }

	render() {
		const {score, level, songNumber, answersList, selectedItem} = this.state;
		console.log(answersList[songNumber].name);
	  return (  
		<div className="grey darken-4">
		  <Header score={score} />
		  <Question level={level} songNumber={songNumber} />
		  <Content onSelectItem={this.onSelectItem} selectedItem={selectedItem} answersList={answersList}/>
		  <NextButton />
		</div>
	  );
    }
}
