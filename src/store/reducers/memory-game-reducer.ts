import { MemoryGameCardData } from '../../memory-game/memory-game.interfaces';
import { getNewMemoryGameBoard } from '../../memory-game/memory-game.utilities';
import {
  ACTION_FLIP_ALL_CARDS_DOWN,
  ACTION_FLIP_CARD_UP,
  ACTION_NEW_MEMORY_GAME,
  ACTION_SET_CHEAT_MODE,
} from '../actions';

export interface MemoryGameState {
  cards: MemoryGameCardData[];
  flippedCard1: MemoryGameCardData | null;
  flippedCard2: MemoryGameCardData | null;
  isCheating: boolean;
}

const initialState: MemoryGameState = {
  cards: getNewMemoryGameBoard(),
  flippedCard1: null,
  flippedCard2: null,
  isCheating: false,
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
        isCheating: false,
      };
    case ACTION_FLIP_CARD_UP:
      if (state.flippedCard1) {
        // flip over the second card, and mark if matched with first

        const newState = {
          ...state,
          flippedCard2: action.payload,
        };

        if (newState.flippedCard1?.symbol === newState.flippedCard2.symbol) {
          newState.cards = newState.cards.map((it) => {
            if (it.symbol === newState.flippedCard1?.symbol) {
              return {
                ...it,
                isMatched: true,
              };
            } else {
              return it;
            }
          });
        }

        return newState;
      } else {
        // flip over the first card
        return {
          ...state,
          flippedCard1: action.payload,
        };
      }
    case ACTION_FLIP_ALL_CARDS_DOWN:
      return {
        ...state,
        flippedCard1: null,
        flippedCard2: null,
      };
    case ACTION_SET_CHEAT_MODE:
      return {
        ...state,
        isCheating: action.payload,
      };
  }

  return state;
};
