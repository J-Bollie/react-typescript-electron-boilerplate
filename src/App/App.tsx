import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import config from "@/config";

import GlobalStyle from "@/GlobalStyle";
import Default from "./Default/Default";

interface ArgumentsInterface {
  command: string;
  args: any;
}

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    window.api.receive("fromMain", (args: ArgumentsInterface) => {
      args.args == "light" ? setTheme("light") : setTheme("dark");
    });

    return () => window.api.removeAllListeners("fromMain");
  });

  return (
    <HashRouter>
      <Container>
        <GlobalStyle />
        <ThemeProvider
          theme={theme == "light" ? config.lightTheme : config.darkTheme}
        >
          <Routes>
            <Route path="/" element={<Default />} />
          </Routes>
        </ThemeProvider>
      </Container>
    </HashRouter>
  );
};

const Container = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;
`;

export default App;
