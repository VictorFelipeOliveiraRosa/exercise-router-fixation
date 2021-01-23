import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route
      path="/users/:id"
      render={(props) => <Users {...props} greetingMessage="Good Morning" />}
    />
    <StrictAccess
      path="/strictaccess"
      component={() => <h1>Você está logado</h1>}
      user={{ login: 'joao', password: 1234 }}
    />
  </Switch>
);

export default Routes;
