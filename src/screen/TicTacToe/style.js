import styled from 'styled-components';

export const TicTacToeContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 35px;
  }

  

  .drawContainer {
    position: absolute;
    z-index: 8;
    top: 50%
  }
  
  .drawContainer > span{
    color: white;
    font-size: 1.4rem;
    font-weight: 800;
  }
  `;

export const ResetGame = styled.button `
margin-top: 0.5rem;
background-color: #190be9;
color: #fff;

&:hover {
  background-color: #003be5;
}
`
