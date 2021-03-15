import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style/main.js';
import App from '../src/screen/TicTacToe';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);