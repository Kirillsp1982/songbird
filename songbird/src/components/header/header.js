import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
	
	renderItems(arr) {
	const listClasses = 'col s6 m4 l2';
    return arr.map((el, i) => {
		let itemClass = listClasses;
		if (i === this.props.level) itemClass += ' teal';
      return (
		<li key={i + 10} className={itemClass}>
			<p>{el}</p>
        </li>
      );
    });
  }
	
render() {
  const levelNames = [
	  'Русский рок',
	  'Зарубежный рок',
	  'Русский поп',
	  'Русские мульт',
	  'Зарубежные мульт',
	  'Военные песни',
	];
	const items = this.renderItems(levelNames);
  return (
    <div>
      <div className="container">
        <div className="row valign-wrapper">
          <p className="col s4 center-align header-logo white-text">Song<span className="green-text">Guess</span></p>     
          <p className="col s4 offset-s4 center-align white-text">Score: {this.props.score}</p>
        </div>
      </div>
      <div className="container">
      
      <ul className="row teal lighten-2 white-text center-align">
        {items}
      </ul>
      
      </div>
    </div>
  );
};
};