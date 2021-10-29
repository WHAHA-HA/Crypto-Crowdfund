import { History, MemoryHistory } from 'history';

import React from 'react';
import { Route, Router, Switch } from 'react-router';

import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Layout from './components/hoc/Layout';

import classes from './app.module.css';

interface IProps {
  history: History | MemoryHistory;
  routes: {
    HOME: string;
    ABOUT: string;
    FAQ: string;
    TERMS_AND_CONDITIONS: string;
    PRIVACY_POLICY: string;
    DISCLAIMER: string;
    CAMPAIGNS: string;
    SIGN_IN: string;
  };
}

export default function App({ history, routes }: IProps) {
  return (
    <div className={classes.marketingRoot}>
      <Layout>
        <Router history={history}>
          <Switch>
            <Route exact path={routes.HOME}>
              <Home routes={routes} />
            </Route>
            <Route exact path={routes.ABOUT}>
              <About />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}
