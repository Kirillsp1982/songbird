import React, {Component} from 'react';
import Answers from '../answers';
import Description from '../description';
import 'materialize-css';
import './content.css';

export default class Content extends Component {
  render() {
    return (
    <div className="container row">
    <Answers onSelectItem={ (id) => this.props.onSelectItem(id)} answersList={this.props.answersList} />
    <Description selectedItem={this.props.selectedItem} />
  </div>
  );}
};
