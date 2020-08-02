import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      
      <div className="container">
        <div className="row valign-wrapper">
          <p className="col s4 center-align header-logo white-text">Song<span className="green-text">bird</span></p>     
          <p className="col s4 offset-s4 center-align white-text">Score: 25</p>
        </div>
      </div>
      <div className="container">
      
      <ul className="row teal lighten-2 white-text center-align">
        <li className="col s6 m4 l2 hoverable">
          <p>Разминка</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Воробьиные</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Лесные птицы</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Певчие птицы</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Хищные птицы</p>
        </li>
        <li className="col s6 m4 l2 hoverable">
          <p>Морские птицы</p>
        </li>
      </ul>
      
      </div>
    </div>
  );
};

export default Header;