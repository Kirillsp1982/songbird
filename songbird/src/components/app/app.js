import React from 'react';

import Header from '../header';
import Question from '../question';
import Content from '../content';
import NextButton from '../next-button';

import './app.css';

const App = () => {
  return (
    <div className="grey darken-4">
      <Header />
      <Question />
      <Content />
      <NextButton />
    </div>
  );
};

export default App;