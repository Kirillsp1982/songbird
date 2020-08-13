import React from 'react';
import Answers from '../answers';
import Description from '../description';
import 'materialize-css';

const Content = () => {
  return (
    <div className="container row valign-wrapper content-box">
    <Answers />
    <Description />
  </div>
  );
};

export default Content;