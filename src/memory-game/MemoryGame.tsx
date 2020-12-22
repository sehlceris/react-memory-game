import { AppState } from '../store/root-reducer';
import {
  ACTION_NEW_MEMORY_GAME,
  ACTION_FLIP_CARD_UP,
  ACTION_MARK_CARD_MATCHED,
  ACTION_FLIP_ALL_CARDS_DOWN,
} from '../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import React from 'react';
import { MemoryGameState } from '../store/reducers/memory-game-reducer';
import { MemoryGameCard } from './memory-game.interfaces';

function MemoryGame(props: Props) {
  const cards = props.cards.map((card: MemoryGameCard) => {
    return (
      <div className="card" key={card.id}>
        {card.symbol}
      </div>
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
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame);
