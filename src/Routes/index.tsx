import React from "react";
import { Switch, Route } from "react-router";
import Todo from "../pages/Todo";
import Home from "../pages/Home";
import User from "../pages/User";
import Cronometer from "../pages/Cronometer";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={Todo} />
      <Route path="/user" component={User} />
      <Route path="/cronometer" component={Cronometer} />
    </Switch>
  );
};
