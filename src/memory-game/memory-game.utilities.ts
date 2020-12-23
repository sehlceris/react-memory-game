import {
  MEMORY_GAME_SYMBOLS_COUNT,
  memoryGameSymbols,
} from './memory-game.constants';
import { shuffleArray } from '../utilities/random-utils';
import { MemoryGameCardData } from './memory-game.interfaces';

/**
 * Gets a shuffled set of cards for the memory game (2 cards per symbol)
 */
export const getNewMemoryGameBoard = () => {
  let cards: MemoryGameCardData[] = [];
  const symbols = getRandomMemoryGameSymbols();

  // for each symbol, generate 2 cards
  symbols.forEach((symbol) => {
    const card1: MemoryGameCardData = {
      symbol: symbol,
      isMatched: false,
      id: symbol + 1,
    };
    const card2: MemoryGameCardData = {
      symbol: symbol,
      isMatched: false,
      id: symbol + 2,
    };
    cards.push(card1);
    cards.push(card2);
  });

  // shuffle the cards
  cards = shuffleArray(cards);
  return cards;
};

/**
 * Returns a random set of symbols to be used in the memory game
 */
export const getRandomMemoryGameSymbols = () => {
  let symbols = [...memoryGameSymbols];
  symbols = shuffleArray(symbols);
  symbols = symbols.slice(0, MEMORY_GAME_SYMBOLS_COUNT);
  return symbols;
};
