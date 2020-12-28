import React from 'react';
import 'materialize-css';

import './answers-item.css';

const AnswersItem = (props) => {
	let iconClass = 'material-icons left';
	if (props.icon === 'mood') iconClass += ' green-text';
	if (props.icon === 'mood_bad') iconClass += ' red-text';
    return (
	  <button className="btn col s12 waves-effect waves-light"
			  onClick={props.onSelectItem}>
			  <i className={iconClass}>{props.icon}</i>
			  {props.name}
	  </button>
    );
}
export default AnswersItem;