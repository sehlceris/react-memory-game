import React from 'react';
import './App.scss';
import { connect, ConnectedProps } from 'react-redux';
import { ACTION_INCREMENT_COUNTER } from './store/actions';
import { AppState } from './store/root-reducer';
import MemoryGame from './components/pages/memory-game/MemoryGame';
import DefaultLayout from './components/layouts/default-layout/DefaultLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/pages/about/About';

function App(props: Props) {
  return (
    <BrowserRouter>
      <div className="App">
        <DefaultLayout>
          <Route path="/" exact component={MemoryGame} />
          <Route path="/about" component={About} />
        </DefaultLayout>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: AppState, ownProps: {}) => {
  return {
    navigationState: state.navigation,
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
