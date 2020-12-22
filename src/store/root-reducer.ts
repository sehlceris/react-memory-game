import { AppState } from './store.interfaces';

const initialState: AppState = {
  counter: 0,
};

export const rootReducer = (
  state: AppState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
  }

  return state;
};
