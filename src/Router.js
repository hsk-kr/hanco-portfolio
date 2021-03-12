import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
