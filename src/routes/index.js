import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import FoodPage from '../pages/FoodPage'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/food/:id" component={FoodPage} />
  </Switch>
);

export default Routes;
