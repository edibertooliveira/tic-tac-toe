import React from 'react';
import GameBoard from '../../components/GameBoard';
import Confetti from '../../components/Confetti';
import './style.css';

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
  return messages[random];
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.handlePlayersMove = this.handlePlayersMove.bind(this);
    this.winningConditions = this.winningConditions.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    this.setState((state) => ({ ...state, endGame: checked }));
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
    this.setState({ ...INITIAL_STATE })
  }

  render() {
    const { gameBoard, endGame, activePlayer } = this.state;

    if (endGame) {
      return (
        <section className="ticTacToe">
          <Confetti />
          <h2>{`Fim de Jogo`}</h2>
          <h1>{` Vitoria ${endGame[0]} do Player ${activePlayer}`}</h1>
          <button
          style= {{ zIndex: 10}}
            type="button"
            onClick={ this.handleClick }
          >
            {messageReset()}
          </button>
        </section>
      );
    }
    return (
      <section className="ticTacToe">
        <h1>Player {activePlayer}</h1>
        <GameBoard gameState={gameBoard} onClick={this.handlePlayersMove} />
      </section>
    );
  }
}

export default TicTacToe;
