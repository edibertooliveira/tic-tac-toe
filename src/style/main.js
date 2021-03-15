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

a {
  color: inherit;
}

@media(min-width: 800px) {
    * {
      font-size: 90%;
    }
  }

`;
