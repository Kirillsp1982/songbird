import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <div>
      
      <div className="container">
        <div className="row valign-wrapper">
          <p className="col s4 center-align header-logo white-text">Song<span className="green-text">Guess</span></p>     
          <p className="col s4 offset-s4 center-align white-text">Score: {props.score}</p>
        </div>
      </div>
      <div className="container">
      
      <ul className="row teal lighten-2 white-text center-align">
        <li className="col s6 m4 l2 hoverable">
          <p>Русский рок</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Зарубежный рок</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Русский поп</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Русские мульт</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Зарубежные мульт</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Военные песни</p>
        </li>
      </ul>
      
      </div>
    </div>
  );
};

export default Header;