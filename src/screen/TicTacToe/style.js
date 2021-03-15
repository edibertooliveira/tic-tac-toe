import styled from 'styled-components';

export const TicTacToeContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 35px;
  }

  button {
    -webkit-box-align: baseline;
    border-width: 0px;
    border-radius: 3px;
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
    -webkit-box-pack: center;
    justify-content: center;
    outline: none;
    color: rgb(255, 255, 255) !important;
  }

  button:hover {
    background-color: #2fc18c;
  }
`;
