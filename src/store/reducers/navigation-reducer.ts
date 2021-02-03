import {
  ACTION_CLOSE_SIDEMENU,
  ACTION_NAVIGATE,
  ACTION_OPEN_SIDEMENU,
  ACTION_TOGGLE_SIDEMENU,
} from '../actions';

export interface NavigationState {
  currentRoute: string;
  isSidemenuOpen: boolean;
}

const initialState: NavigationState = {
  currentRoute: '/',
  isSidemenuOpen: false,
};

export const navigationReducer = (
  state: NavigationState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ACTION_NAVIGATE:
      return {
        ...state,
        currentRoute: action.payload,
      };
    case ACTION_OPEN_SIDEMENU:
      return {
        ...state,
        isSidemenuOpen: true,
      };
    case ACTION_CLOSE_SIDEMENU:
      return {
        ...state,
        isSidemenuOpen: false,
      };
    case ACTION_TOGGLE_SIDEMENU:
      return {
        ...state,
        isSidemenuOpen: !state.isSidemenuOpen,
      };
  }

  return state;
};
