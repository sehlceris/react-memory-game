import React from 'react';
import { MemoryGameCardData } from './memory-game.interfaces';
import './MemoryGameCard.scss';

interface Props {
  card: MemoryGameCardData;
  isFlipped: boolean;
  onClick: () => void;
}

function MemoryGameCard(props: Props) {
  const classNames = `MemoryGameCard ${props.isFlipped ? 'flipped' : ''} ${
    props.card.isMatched ? 'matched' : ''
  }`.trim();

  return (
    <div className={classNames} onClick={props.onClick}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">FRONT {props.card.symbol}</div>
          <div className="flip-card-back">BACK {props.card.symbol}</div>
        </div>
      </div>
    </div>
  );
}
export default MemoryGameCard;
