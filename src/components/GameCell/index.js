import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import XImage from '../../image/x.png';
import OImage from '../../image/o.png';

class GameCell extends React.Component {
  render() {
    const { id, positionPlayer, listenPlay } = this.props;

    return (
      <div data-testid={`cell_${id}`} className="game-cell" onClick={()=>listenPlay(id)}>
        {(positionPlayer && <img src={positionPlayer === 'X' ? XImage : OImage} alt={positionPlayer} />) || null}
      </div>
    );
  }
}
GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  positionPlayer: PropTypes.number.isRequired,
  listenPlay: PropTypes.func.isRequired,
}

export default GameCell;
