import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home" >
      </Route>
    </Switch>
  );
};

export default Routes;
