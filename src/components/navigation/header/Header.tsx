import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HeaderComponentProps {
  title: string;
  onSidemenuButtonClick: () => void;
}

const Header = (props: HeaderComponentProps) => {
  return (
    <div className={styles.Header}>
      <button onClick={props.onSidemenuButtonClick}>
        <FontAwesomeIcon
          className="icon"
          icon={['fas', 'bars']}
        ></FontAwesomeIcon>
      </button>
      <h1 className={styles.title}>{props.title}</h1>
      <span className={styles.spacer}></span>
    </div>
  );
};

export default Header;
