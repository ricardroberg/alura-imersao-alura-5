import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    font-family: sans-serif;
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    flex: 1;
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
      flex: 1;
    }
  }
  ::-webkit-scrollbar {
    height: 8px;               /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background-color: #ccc9c9;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888686;
    border-radius: 25px;
  }
`;
