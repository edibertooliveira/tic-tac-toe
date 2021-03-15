import React from 'react';
import { DrawContainer, ResetGame } from '../DrawGame/style';

function DrawGame(props) {
  return (
    <DrawContainer>
    <span>Empate!</span>
    <ResetGame {...props}>Reinicie o jogo</ResetGame>
  </DrawContainer>
  );
}

export default DrawGame;