import React from 'react';
import PropTypes from 'prop-types';
import { CellConteiner } from './style.js';
import XImage from '../../image/x.svg';
import OImage from '../../image/o.svg';

class GameCell extends React.Component {
  render() {
    const { id, positionPlayer, listenPlay } = this.props;

    return (
      <CellConteiner data-testid={`cell_${id}`} onClick={() => listenPlay(id)}>
        {(positionPlayer && (
          <img
            src={positionPlayer === 'X' ? XImage : OImage}
            alt={positionPlayer}
          />
        )) ||
          null}
      </CellConteiner>
    );
  }
}
GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  positionPlayer: PropTypes.number.isRequired,
  listenPlay: PropTypes.func.isRequired,
};

export default GameCell;
