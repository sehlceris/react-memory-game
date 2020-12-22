import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from './store/store.interfaces';

function App(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <div className="counter">
            <span>Counter Value:&nbsp;</span>
            <span>{props.counter}</span>
          </div>
          <button onClick={props.onIncrementCounter}>Increment</button>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: {}) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    onIncrementCounter: () => {
      dispatch({ type: 'INCREMENT_COUNTER' });
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
