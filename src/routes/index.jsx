import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import PlanetDetails from '../pages/PlanetDetails/PlanetDetails';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/planet/:id">
      <PlanetDetails />
    </Route>
  </Switch>
);

export default Routes;
