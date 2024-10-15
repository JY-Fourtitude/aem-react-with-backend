import React from 'react';

const TestComponent = (props) => {
  return (
    <div>
      Hey React
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default TestComponent;