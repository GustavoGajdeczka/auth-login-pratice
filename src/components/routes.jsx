import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './login'
import Home from './home'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
