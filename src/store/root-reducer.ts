import { combineReducers } from 'redux';
import { counterReducer } from './reducers/counter-reducer';
import { memoryGameReducer } from './reducers/memory-game-reducer';
import { navigationReducer } from './reducers/navigation-reducer';

// this ingenious type inference fix comes from: https://stackoverflow.com/a/64840112
type BaseReducerMap<S> = {
  [K in keyof S]: (state: S[K], action: any) => S;
};

export type InferRootState<ReducerMap extends BaseReducerMap<S>, S = any> = {
  [K in keyof ReducerMap]: ReturnType<ReducerMap[K]>;
};

const reducersMap = {
  counter: counterReducer,
  memoryGame: memoryGameReducer,
  navigation: navigationReducer,
};

export const rootReducer = combineReducers(reducersMap);
export type AppState = InferRootState<typeof reducersMap>;
