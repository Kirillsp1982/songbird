import React from 'react';
import 'materialize-css';

import './answers-item.css';

const AnswersItem = (props) => {

    return (
	  <button className="btn col s12 waves-effect waves-light"
			  onClick={props.onSelectItem}>
			  <i className="material-icons left">mood</i>
			  {props.name}
	  </button>
    );
}
export default AnswersItem;