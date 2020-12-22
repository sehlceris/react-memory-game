import { MemoryGameCard } from '../../memory-game/memory-game.interfaces';
import { getNewMemoryGameBoard } from '../../memory-game/memory-game.utilities';
import {
  ACTION_FLIP_ALL_CARDS_DOWN,
  ACTION_FLIP_CARD_UP,
  ACTION_INCREMENT_COUNTER,
  ACTION_MARK_CARD_MATCHED,
  ACTION_NEW_MEMORY_GAME,
} from '../actions';

export interface MemoryGameState {
  cards: MemoryGameCard[];
  flippedCard1: MemoryGameCard | null;
  flippedCard2: MemoryGameCard | null;
}

const initialState: MemoryGameState = {
  cards: getNewMemoryGameBoard(),
  flippedCard1: null,
  flippedCard2: null,
};

export const memoryGameReducer = (
  state: MemoryGameState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ACTION_NEW_MEMORY_GAME:
      return {
        cards: getNewMemoryGameBoard(),
        flippedCard1: null,
        flippedCard2: null,
      };
    case ACTION_FLIP_CARD_UP:
      // TODO
      return {
        ...state,
      };
    case ACTION_MARK_CARD_MATCHED:
      // TODO
      return {
        ...state,
      };
    case ACTION_FLIP_ALL_CARDS_DOWN:
      // TODO
      return {
        ...state,
      };
  }

  return state;
};
