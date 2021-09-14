import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Todo from "../components/Inputs/Todo";
import Home from "../pages/Home";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={Todo} />
    </Switch>
  );
};
