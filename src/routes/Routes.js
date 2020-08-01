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
    <Route path="/" render={(props) => <Home {...props} />} />
    <Route path="/detail" render={(props) => <DetailPage {...props} />} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
