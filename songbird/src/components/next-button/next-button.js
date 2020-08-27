import React from 'react';
import 'materialize-css';

import './next-button.css';

const NextButton = (props) => {
  let buttonClass = "btn waves-effect waves-light col s12";
  if (props.isUnActiveNextButton) {
    buttonClass += ' disabled';
  }
  return (
    <div className="container row grey darken-3">
        <button className={buttonClass}>Next level</button>
    </div>
  );
};

export default NextButton;