import { AppState } from '../store/root-reducer';
import {
  ACTION_NEW_MEMORY_GAME,
  ACTION_FLIP_CARD_UP,
  ACTION_FLIP_ALL_CARDS_DOWN,
} from '../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import React from 'react';
import { MemoryGameState } from '../store/reducers/memory-game-reducer';
import { MemoryGameCardData } from './memory-game.interfaces';
import './MemoryGame.scss';
import MemoryGameCard from './MemoryGameCard';

function MemoryGame(props: Props) {
  const handleCardClick = (card: MemoryGameCardData) => {
    const canFlip =
      (!props.flippedCard1 || !props.flippedCard2) &&
      card !== props.flippedCard1 &&
      card !== props.flippedCard2 &&
      !card.isMatched;
    if (canFlip) {
      props.onCardClick(card);
      if (props.flippedCard1) {
        setTimeout(() => {
          props.onFlipCardsBackDown();
        }, 1500);
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
        onClick={() => handleCardClick(card)}
      />
    );
  });

  return (
    <div className="MemoryGame">
      <button onClick={props.onNewGame}>New Game</button>
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
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame);