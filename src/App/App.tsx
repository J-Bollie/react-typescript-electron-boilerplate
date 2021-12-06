import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Test>I'm a boilerplate!</Test>} />
      </Routes>
    </HashRouter>
  );
};

const Test = styled.h1`
  font-weight: bolder;
`;

export default App;
