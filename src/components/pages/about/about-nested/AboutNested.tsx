import React from 'react';
import styles from './AboutNested.module.scss';
import { withRouter, Route, RouteComponentProps } from 'react-router-dom';

type AboutNestedParams = {
  id: string;
};

type AboutNestedProps = RouteComponentProps<AboutNestedParams>;

const AboutNested: React.FC<AboutNestedProps> = (props) => {
  return (
    <div className={styles.AboutNested}>
      <p>This is nested route with param: {props.match.params.id}</p>
    </div>
  );
};

export default AboutNested;
