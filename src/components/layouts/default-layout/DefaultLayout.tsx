import React from 'react';
import styles from './DefaultLayout.module.scss';
import Header from '../../navigation/header/Header';
import { AppState } from '../../../store/root-reducer';
import {
  ACTION_CLOSE_SIDEMENU,
  ACTION_NAVIGATE,
  ACTION_OPEN_SIDEMENU,
  ACTION_TOGGLE_SIDEMENU,
} from '../../../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import Sidemenu from '../../navigation/sidemenu/Sidemenu';
import { NavigationState } from '../../../store/reducers/navigation-reducer';

interface DefaultLayoutComponentProps {
  children: any;
}

const DefaultLayout = (props: Props) => {
  return (
    <div className={styles.DefaultLayout}>
      <Header
        title="React Experiments"
        onSidemenuButtonClick={props.onToggleSidemenu}
      />
      <Sidemenu
        isOpen={props.navigationState.isSidemenuOpen}
        onNavLinkSelected={props.onNavigate}
        onBackdropClicked={props.onCloseSidemenu}
      />
      <div className={styles.layoutChildren}>{props.children}</div>
    </div>
  );
};

const mapStateToProps = (
  state: AppState,
  ownProps: DefaultLayoutComponentProps
) => {
  return {
    ...ownProps,
    navigationState: state.navigation,
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    onNavigate: (link: string) => {
      dispatch({ type: ACTION_NAVIGATE, payload: link });
    },
    onOpenSidemenu: () => {
      dispatch({ type: ACTION_OPEN_SIDEMENU });
    },
    onCloseSidemenu: () => {
      dispatch({ type: ACTION_CLOSE_SIDEMENU });
    },
    onToggleSidemenu: () => {
      console.log(`onToggleSidemenu`);
      dispatch({ type: ACTION_TOGGLE_SIDEMENU });
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & DefaultLayoutComponentProps;

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
