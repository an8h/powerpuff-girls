/* eslint-disable react/jsx-fragments */
// @flow

import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Store from "./redux/Store";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/_main.scss";

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Fragment>
          <Route component={Routes} />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
