import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MemoryGameCardData } from '../memory-game.interfaces';
import './MemoryGameCard.scss';

interface Props {
  card: MemoryGameCardData;
  isFlipped: boolean;
  isCheating: boolean;
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
          <div className="flip-card-side flip-card-front">
            {props.isCheating ? (
              <FontAwesomeIcon
                className="icon"
                icon={['fab', props.card.symbol]}
              ></FontAwesomeIcon>
            ) : (
              <div className="card-back-logo">
                Flip
                <br />
                Me
              </div>
            )}
          </div>
          <div className="flip-card-side flip-card-back">
            <FontAwesomeIcon
              className="icon"
              icon={['fab', props.card.symbol]}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MemoryGameCard;
