import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h3>Songbird</h3>
      <ul className="header-list">
        <li>
          <a href="#a">Разминка</a>
        </li>
        <li>
          <a href="#a">Воробьиные</a>
        </li>
        <li>
          <a href="#a">Лесные птицы</a>
        </li>
        <li>
          <a href="#a">Певчие птицы</a>
        </li>
        <li>
          <a href="#a">Хищные птицы</a>
        </li>
        <li>
          <a href="#a">Морские птицы</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;