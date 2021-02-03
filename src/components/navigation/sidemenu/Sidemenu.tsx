import React from 'react';
import styles from './Sidemenu.module.scss';

interface SidemenuComponentProps {
  isOpen: boolean;
  onBackdropClicked: () => void;
  onNavLinkSelected: (link: string) => void;
}

const Sidemenu = (props: SidemenuComponentProps) => {
  return (
    <div className={`${styles.Sidemenu} ${props.isOpen ? styles.open : ''}`}>
      <div className={styles.backdrop} onClick={props.onBackdropClicked} />
      <ul className={styles.navigationLinks}>
        <li onClick={() => props.onNavLinkSelected?.('/')}>Memory Game</li>
        <li onClick={() => props.onNavLinkSelected?.('/about')}>About</li>
      </ul>
    </div>
  );
};

export default Sidemenu;
