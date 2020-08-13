import React from 'react';
import 'materialize-css';

import './description.css';

const Description = () => {
  return (
    <div className="col s8 grey darken-3 white-text description-box">
      <div className="row valign-wrapper">
      <div className="col s4">
        <img className="responsive-img" src="https://i.pinimg.com/originals/16/fd/18/16fd18892bd75297e8afef1de3709f88.jpg" alt="bird"/>
      </div>
      <div className="col s8">
        <h4>Ворон</h4>
        <div className="divider"></div>
        <p>Corvus corax</p>
        <div className="divider"></div>
        <div>audio</div>
      </div>
      </div>
      <p>Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.</p>
      </div>
  );
};

export default Description;