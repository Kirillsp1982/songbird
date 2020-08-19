import React from 'react';
import Answers from '../answers';
import Description from '../description';
import 'materialize-css';
import './content.css';

const Content = ({ onSelectItem, selectedItem, answersList}) => {
  return (
    <div className="container row">
    <Answers onSelectItem={ (id) => onSelectItem(id)} answersList={answersList} />
    <Description selectedItem={selectedItem} />
  </div>
  );
};

export default Content;