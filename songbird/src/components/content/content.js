import React from 'react';
import Answers from '../answers';
import Description from '../description';
import 'materialize-css';
import './content.css';

const Content = ({ onSelectItem, selectedItem }) => {
  return (
    <div className="container row">
    <Answers onSelectItem={ (id) => onSelectItem(id) }/>
    <Description selectedItem={selectedItem} />
  </div>
  );
};

export default Content;