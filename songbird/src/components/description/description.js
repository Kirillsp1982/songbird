import React from 'react';
import 'materialize-css';

import './description.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Description = (props) => {
	if (props.itemDescription === null) {
	  return (
		<div className="col s12 m8 grey darken-3 white-text">
		  <div className="row valign-wrapper">
		  <div className="col s8">
			<div className="divider"></div>
			<h4>Послушайте плеер.<br/>Выберите исполнителя из списка</h4>
			<div className="divider"></div>			
		  </div>
		  </div>      
		</div>
	  );
	};
	return (
    <div className="col s12 m8 grey darken-3 white-text">
      <div className="row valign-wrapper">
      <div className="col s4">
        <img className="responsive-img" src={props.itemDescription.image} alt="bird"/>
      </div>
      <div className="col s8">
        <h4>{props.itemDescription.name}</h4>
        <div className="divider"></div>
        <p>{props.itemDescription.species}</p>
        <div className="divider"></div>
        <div>
        <AudioPlayer
          showJumpControls={false}
          customAdditionalControls={[]}
          layout="horizontal-reverse"
          src={ props.itemDescription.audio }
        />
	    </div>
      </div>
      </div>
      <p>{props.itemDescription.description}</p>
      </div>
	  );
};

export default Description;