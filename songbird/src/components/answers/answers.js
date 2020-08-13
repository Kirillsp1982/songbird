import React, { Component } from 'react';
import 'materialize-css';

import './answers.css';
import SongsBase from '../song-base';

const songsBase = new SongsBase;

export default class Answers extends Component {

  state = {
    answersList: []
  };

  componentDidMount() {
        this.setState({
          answersList: songsBase.getResource(),
        });
      }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
		<li key={id}>
          <button className="btn col s12 waves-effect waves-light">{name}</button>
        </li>
      );
    });
  }

  render() {

    const { answersList } = this.state;

    const items = this.renderItems(answersList);

    return (
	  <div className="col s4 grey darken-3 answers-box">
		  <ul className="row">
			{items}
		  </ul>      
      </div>
    );
  }
}
