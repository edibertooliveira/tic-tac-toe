import React from 'react';
import GameBoard from '../../components/GameBoard';
import DrawGame from '../../components/DrawGame';
import Confetti from '../../components/Confetti';
import { TicTacToeContainer} from './style.js';

const returnWin = [
  [
    ['diagonal', [0, 4, 8]],
    ['diagonal', [2, 4, 6]],
  ],
  [
    ['vestical', [0, 3, 6]],
    ['vestical', [1, 4, 7]],
    ['vestical', [2, 5, 8]],
  ],
  [
    ['horizontal', [0, 1, 2]],
    ['horizontal', [3, 4, 5]],
    ['horizontal', [6, 7, 8]],
  ],
];

const INITIAL_STATE = {
  activePlayer: 1,
  playerX: [],
  playerO: [],
  gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  endGame: false,
  drawGame: false
};

const messageReset = () => {
  const messages = [
    'Vamos outra! Reinicie o jogo',
    'Desafia ir outra. Reinicie o jogo',
    'Vai outra vez! Reinicie o jogo',
    'Que tal mais uma? Reinicie o jogo',
    'Dá tempo pra outra? Reinicie o jogo',
  ];
  const random = Math.round(Math.random() * messages.length - 1);
  console.log(random);
  return messages[random];
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.handlePlayersMove = this.handlePlayersMove.bind(this);
    this.handlePlayersDraw = this.handlePlayersDraw.bind(this);
    this.winningConditions = this.winningConditions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handlePlayersDraw() {
    let { playerX, playerO, drawGame} = this.state;
    const playersNineSttempts = playerX.length + playerO.length === 9;
    if (playersNineSttempts && !drawGame)
    this.setState((state) => ({ ...state, drawGame: true }))
  }

  winningConditions(playerCurrent, activePlayer) {
    const [diagonal, vestical, horizontal] = returnWin;
    const checked =
      diagonal.find((value1) =>
        value1[1].every((value2) => playerCurrent.includes(value2))
      ) ||
      vestical.find((value1) =>
        value1[1].every((value2) => playerCurrent.includes(value2))
      ) ||
      horizontal.find((value1) =>
        value1[1].every((value2) => playerCurrent.includes(value2))
      );
    if (checked) {
      activePlayer = activePlayer === 1 ? 2 : 1;
      this.setState((state) => ({ ...state, activePlayer }));
    }
    this.setState((state) => ({ ...state, endGame: checked }), ()=> this.handlePlayersDraw());
  }

  handlePlayersMove(position) {
    let { activePlayer, gameBoard, endGame } = this.state;
    if (!endGame) {
      const player = activePlayer === 1 ? 'X' : 'O';
      const newGameBoard = [];
      const activeRound =
        player === 'X' ? (activePlayer = 2) : (activePlayer = 1);

      gameBoard.forEach((field, index) => {
        if (index === position) field = player;
        newGameBoard.push(field);
      });

      this.setState((state) => ({
        [`player${player}`]: [...state[`player${player}`], position],
        activePlayer: activeRound,
        gameBoard: newGameBoard,
      }));
      this.winningConditions(
        [...this.state[`player${player}`], position],
        activeRound
      );
    }
  }

  handleClick() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { gameBoard, drawGame, endGame, activePlayer } = this.state;

    if (endGame) {
      return (
        <TicTacToeContainer>
          <Confetti />
          <h2>{`Fim de Jogo`}</h2>
          <h1>{` Vitoria ${endGame[0]} do Player ${activePlayer}`}</h1>
          <button
            style={{ zIndex: 10 }}
            type="button"
            onClick={this.handleClick}
          >
            {messageReset() || 'Reinicie o jogo'}
          </button>
        </TicTacToeContainer>
      );
    }
    return (
      <TicTacToeContainer>
        <h1>Player {activePlayer}</h1>
        <GameBoard gameState={gameBoard} onClick={this.handlePlayersMove} />
        {drawGame && !endGame && <DrawGame onClick={this.handleClick} />}
      </TicTacToeContainer>
    );
  }
}

export default TicTacToe;
