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
		  //const answersList = this.toggleProperty(state.answersList, id, 'isActive');
		const arr = state.answersList;  
		const idx = arr.findIndex((item) => item.id === id);
		const oldItem = arr[idx];
	
		const item = { ...arr[idx], isActive: false } ;
		
		const answersList = [
		  ...arr.slice(0, idx),
		  item,
		  ...arr.slice(idx + 1)
		];
		  return {answersList};
		});
	  };

	onSelectItem = (id) => {
    this.setState(() => {
      return {selectedItem: id}
	});
	this.onUnActive(id);
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
		console.log(this.state.answersList);
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
