import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {

  font-size: 80%; /* controle das medidas rem */
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  color: #3d495c;
}

a {
  color: inherit;
}

button {
    border-width: 0px;
    border-radius: 0.8rem;
    box-sizing: border-box;
    font-size: 1.4rem;
    font-weight: 500;
    max-width: 300px;
    text-align: center;
    transition: background 0.1s ease-out 0s,
      box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    white-space: nowrap;
    background-color: #036b52;
    cursor: pointer;
    height: 2.28571em;
    line-height: 2.28571em;
    padding: 0px 10px;
    vertical-align: middle;
    width: 100%;
    justify-content: center;
    outline: none;
    color: rgb(255, 255, 255) !important;
    &:hover {
      background-color: #2fc18c;

    }
  }

@media(min-width: 800px) {
    * {
      font-size: 90%;
    }
  }

`;
