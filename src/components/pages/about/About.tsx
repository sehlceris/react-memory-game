import React from 'react';
import { NavLink, Route, RouteComponentProps } from 'react-router-dom';
import styles from './About.module.scss';
import AboutNested from './about-nested/AboutNested';

const About: React.FC<RouteComponentProps> = (props) => {
  console.log(`[About] url`, props.match.url);

  return (
    <div className={styles.About}>
      <h1>About</h1>
      <p>
        This is a React application that I created to learn how to use things
        like the Store, Routing, etc
      </p>
      <div className={styles.tabGroup}>
        <NavLink to={props.match.url + '/1'}>Tab 1</NavLink>
        <NavLink to={props.match.url + '/2'}>Tab 2</NavLink>
      </div>
      <Route path={props.match.url + '/:id'} component={AboutNested} />
    </div>
  );
};

export default About;
