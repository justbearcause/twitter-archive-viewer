import Likes from "components/Likes";
import Tweets from "components/Tweets";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Router: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/tweets" />
      </Route>
      <Route path="/tweets" exact>
        <Tweets />
      </Route>
      <Route path="/likes" exact>
        <Likes />
      </Route>
    </Switch>
  );
};

export default Router;
