import React from 'react';
import 'materialize-css';

import './question.css';

const Question = () => {
  return (
    <div className="container row grey darken-3">
      <div className="col s2">
        <img className="responsive-img" src="https://i.pinimg.com/originals/16/fd/18/16fd18892bd75297e8afef1de3709f88.jpg" alt="bird"/>
      </div>
      <div className="col s10 white-text center-align">
        <h4>********</h4>
        <div className="divider"></div>
        <div>audio</div>
      </div>
    </div>
  );
};

export default Question;