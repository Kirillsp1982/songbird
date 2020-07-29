import React from 'react';

import Header from '../header';
import Question from '../question';
import Answers from '../answers';
import Description from '../description';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <Question />
      <Answers />
      <Description />
    </div>
  );
};

export default App;