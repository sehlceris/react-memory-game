import React from 'react';
import styles from './DefaultLayout.module.scss';

interface DefaultLayoutComponentProps {
  children: any;
}

const DefaultLayout = (props: DefaultLayoutComponentProps) => {
  return (
    <>
      <div className={styles.DefaultLayout}>
        <div className={styles.layoutChildren}>{props.children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
