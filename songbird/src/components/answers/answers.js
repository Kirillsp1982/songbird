import React, { Component } from 'react';
import 'materialize-css';

import './answers.css';
import AnswersItem from '../answers-item';

export default class Answers extends Component {

  state = {
    answersList: [],
  };

  componentDidMount() {
        this.setState({
          answersList: this.props.answersList,
        });
      }

  renderItems(arr) {
    return arr.map(({id, name, icon}) => {
      return (
		<li key={id}>
		  <AnswersItem 
		  name={name}
		  onSelectItem={ () => this.props.onSelectItem(id) }
		  icon={icon}
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
