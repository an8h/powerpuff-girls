/* eslint-disable react/jsx-fragments */
// @flow

import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./redux/Store";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/_main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Fragment>
            <Route component={Routes} />
          </Fragment>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
