import React from 'react';
import styled from 'styled-components';

const App = () => {

  return (
    <div className="app">
      <Test>I'm a boilerplate!</Test>
    </div>
  );
}

const Test = styled.h1`
  font-weight: bolder
`

export default App;