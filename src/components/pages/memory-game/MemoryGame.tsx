import { AppState } from '../../../store/root-reducer';
import {
  ACTION_NEW_MEMORY_GAME,
  ACTION_FLIP_CARD_UP,
  ACTION_FLIP_ALL_CARDS_DOWN,
  ACTION_SET_CHEAT_MODE,
} from '../../../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import { MemoryGameState } from '../../../store/reducers/memory-game-reducer';
import React, { useEffect, useState } from 'react';
import { MemoryGameCardData } from './memory-game.interfaces';
import './MemoryGame.scss';
import Confetti from 'react-confetti';
import { MEMORY_GAME_CARDS_FACE_UP_TIME_MS } from './memory-game.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MemoryGameCard from './memory-game-card/MemoryGameCard';

interface MemoryGameComponentState {
  flipDownTimeout: NodeJS.Timeout | null;
}

function MemoryGame(props: Props) {
  const [state, setState] = useState<MemoryGameComponentState>({
    flipDownTimeout: null,
  });

  useEffect(() => {
    return () => {
      if (state.flipDownTimeout) {
        clearTimeout(state.flipDownTimeout);
      }
    };
  }, []);

  const handleCardClick = (card: MemoryGameCardData) => {
    const canFlip =
      (!props.flippedCard1 || !props.flippedCard2) &&
      card !== props.flippedCard1 &&
      card !== props.flippedCard2 &&
      !card.isMatched;
    if (canFlip) {
      props.onCardClick(card);
      if (props.flippedCard1) {
        if (state.flipDownTimeout) {
          clearTimeout(state.flipDownTimeout);
        }
        const newTimeout = setTimeout(() => {
          props.onFlipCardsBackDown();
        }, MEMORY_GAME_CARDS_FACE_UP_TIME_MS);
        setState((previousState) => {
          return {
            ...previousState,
            flipDownTimeout: newTimeout,
          };
        });
      }
    }
  };

  const cards = props.cards.map((card: MemoryGameCardData) => {
    const isFlipped =
      props.flippedCard1 === card || props.flippedCard2 === card;
    return (
      <MemoryGameCard
        card={card}
        key={card.id}
        isFlipped={isFlipped}
        isCheating={props.isCheating}
        onClick={() => handleCardClick(card)}
      />
    );
  });

  return (
    <div className="MemoryGame">
      {props.isWon ? <Confetti /> : ''}
      <div className="header">
        <span className="title">
          {props.isWon ? 'Victory!' : 'Memory Game'}
        </span>
        <label className="cheat-checkbox-label">
          <span>Cheat&nbsp;</span>
          <input
            type="checkbox"
            onChange={() => props.onCheatToggle(!props.isCheating)}
            checked={props.isCheating}
          />
        </label>
        <button className="new-game-button" onClick={props.onNewGame}>
          New Game
        </button>
        <span className="github">
          <a
            target="_blank"
            href="https://github.com/sehlceris/react-memory-game"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </span>
      </div>
      <div className="memory-game-board">{cards}</div>
    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: {}): MemoryGameState => {
  return {
    ...state.memoryGame,
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    onNewGame: () => {
      dispatch({ type: ACTION_NEW_MEMORY_GAME });
    },
    onCardClick: (card: MemoryGameCardData) => {
      dispatch({ type: ACTION_FLIP_CARD_UP, payload: card });
    },
    onFlipCardsBackDown: () => {
      dispatch({ type: ACTION_FLIP_ALL_CARDS_DOWN });
    },
    onCheatToggle: (isCheating: boolean) => {
      dispatch({ type: ACTION_SET_CHEAT_MODE, payload: isCheating });
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame);
