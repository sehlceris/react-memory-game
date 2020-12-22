import { combineReducers } from 'redux';
import { counterReducer } from './reducers/counter-reducer';

// this ingenious type inference fix comes from: https://stackoverflow.com/a/64840112
type BaseReducerMap<S> = {
  [K in keyof S]: (state: S[K], action: any) => S;
};

export type InferRootState<ReducerMap extends BaseReducerMap<S>, S = any> = {
  [K in keyof ReducerMap]: ReturnType<ReducerMap[K]>;
};

const reducersMap = {
  counter: counterReducer,
};

export const rootReducer = combineReducers(reducersMap);
export type AppState = InferRootState<typeof reducersMap>;
