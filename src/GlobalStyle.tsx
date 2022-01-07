import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Questrial&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

*{
    font-family: 'Questrial', sans-serif;
    font-family: 'Roboto', sans-serif;

    box-sizing: border-box;
  
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  
    -webkit-user-drag: none;
  
    transition: background ease 0.3s, background-color ease 0.3s, color ease 0.05s, border ease 0.3s, transform ease 0.3s, fill ease 0.3s, stroke ease 0.3s;
  }
`;

export default GlobalStyle;
