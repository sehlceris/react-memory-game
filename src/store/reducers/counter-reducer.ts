import { ACTION_INCREMENT_COUNTER } from '../actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = (
  state: CounterState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ACTION_INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
  }

  return state;
};
