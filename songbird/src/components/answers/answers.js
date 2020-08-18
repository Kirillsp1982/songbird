import React, { Component } from 'react';
import 'materialize-css';

import './answers.css';
import SongsBase from '../song-base';
import AnswersItem from '../answers-item';

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
		  <AnswersItem 
		  name={name}
		  onSelectItem={ () => this.props.onSelectItem(id) }
		  />
        </li>
      );
    });
  }

  render() {

    const { answersList } = this.state;

    const items = this.renderItems(answersList);

    return (
	  <div className="col s12 m4 answers-box">
		  <ul className="row">
			{items}
		  </ul>      
      </div>
    );
  }
}
