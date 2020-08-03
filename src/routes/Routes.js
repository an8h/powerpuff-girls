/* eslint-disable react/jsx-props-no-spreading */

/*
Set up Routes for the app
*/
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home/index";
import DetailPage from "../components/DetailPage/index";
import PageNotFound from "../components/PageNotFound/index";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/detail" component={DetailPage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
