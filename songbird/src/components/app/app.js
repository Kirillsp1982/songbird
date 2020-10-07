import React, { Component } from 'react';

import Header from '../header';
import Question from '../question';
import Content from '../content';
import NextButton from '../next-button';
import SongBase from '../song-base'

import './app.css';

const songsInBase = 6;
const songBase = new SongBase;
let buttonsList = songBase.getResource();
export default class App extends Component {
	state = {
      level: 0,
	  score: 0,
	  points: 5,
	  songNumber: Math.floor(Math.random() * songsInBase),
	  selectedItem: null,
	  answersList: [],
	  isUnActiveNextButton: true,
	  isGuessed: false,
	  itemDescription: null,
    };

	
	wrongSound = () =>{
		new Audio('../../assets/audio/wrong.mp3').play();
	}

	correctSound = () =>{
		new Audio('../../assets/audio/correct.mp3').play();
	}
	
	  onUnActive = (id) => {

		const arr = this.state.answersList;  
		const idx = arr.findIndex((item) => item.id === id);
		let icon = arr[idx].icon;
		if (arr[idx].isActive && !this.state.isGuessed) {
			icon = this.onChangeIcon(id);
		}
		if (arr[idx].isActive && id !== this.state.songNumber && !this.state.isGuessed) {
			this.setState((state) => {
				let newPoints = this.state.points - 1;
				this.wrongSound();
				return {points: newPoints}
			  });
		}
		if (arr[idx].isActive && id === this.state.songNumber) {
			  this.setState((state) => {
				  let newSore = this.state.score + this.state.points;
				  this.correctSound();
				return {
					isUnActiveNextButton: false,
					score: newSore,
					isGuessed: true
				}
			  });
		}
		let item = { ...arr[idx], icon: icon, isActive: false } ;
		const answersList = [
		  ...arr.slice(0, idx),
		  item,
		  ...arr.slice(idx + 1)
		];

		this.setState((state) => {
		  return {answersList};
		});
	  };

	onSelectItem = (id) => {
    this.setState((state) => {
      return {
		  selectedItem: id,
		  itemDescription: buttonsList[id],
		  }
	});
	this.onUnActive(id);
  };
  
  onChangeIcon = (id) => {
	let icon = (id === this.state.songNumber) ? 'mood' : 'mood_bad';
	return icon;
  };

  onPressNextButton = () => {
	  if (this.state.level < 5) {
		  let nextLevel = this.state.level + 1;
		  songBase.setLevel(nextLevel);
		  buttonsList = songBase.getResource();
		  this.setState((state) => {
			return {
				level: nextLevel,
				itemDescription: null,
			}
		  });
	  }
  }

  componentWillMount() {
    const items = this.createItems(buttonsList);
	
	this.setState({
	  answersList: items,
	});
  }

  componentDidUpdate(nexrProps, nextState) {
	  if (nextState.level !== this.state.level) {
    const items = this.createItems(buttonsList);
	
	this.setState((state) => {
		return {
			points: 5,
			songNumber: Math.floor(Math.random() * songsInBase),
			selectedItem: null,
			answersList: items,
			isUnActiveNextButton: true,
			isGuessed: false,
		}
	  });
}
  }

  createItems = (arr) => {
    return arr.map(({id, name}) => {
      return (
		{ id: id, name: name, icon: 'help_outline', isActive: true }
      );
    });
  }

	render() {
		const {score, level, songNumber, answersList, itemDescription, isUnActiveNextButton, isGuessed} = this.state;
		console.log(answersList[songNumber].name);
	  return (  
		<div className="grey darken-4">
		  <Header level={level} score={score} />
		  <Question level={level} songNumber={songNumber} isGuessed={isGuessed}/>
		  <Content onSelectItem={this.onSelectItem} itemDescription={itemDescription} answersList={answersList}/>
		  <NextButton isUnActiveNextButton={isUnActiveNextButton} onPressNextButton={this.onPressNextButton}/>
		</div>
	  );
    }
}
