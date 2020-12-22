import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect, ConnectedProps } from 'react-redux';
import { ACTION_INCREMENT_COUNTER } from './store/actions';
import { AppState } from './store/root-reducer';
import MemoryGame from './memory-game/MemoryGame';

function App(props: Props) {
  return (
    <div className="App">
      <MemoryGame></MemoryGame>
    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: {}) => {
  return {
    counter: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    onIncrementCounter: () => {
      dispatch({ type: ACTION_INCREMENT_COUNTER });
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
