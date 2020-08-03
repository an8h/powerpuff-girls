// // @flow

// /*
// Set up Redux Store
// */

import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  compose,
  createStore,
} from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as actionCreators from "./Actions";
import DefaultState from "./DefaultState";
import { getMovie, getEpisodes } from "./Reducers";

const rootReducer = combineReducers({
  movie: getMovie,
  episodes: getEpisodes,
});

const persistConfig = {
  key: "persistStore",
  storage,
  whitelist: ["movie", "episodes"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const enhancers = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : (f) => f
);

const store = createStore(pReducer, DefaultState, enhancers);
const persistor = persistStore(store);
export { store, persistor };

export function mapDispachToProps(dispatch: Function) {
  return bindActionCreators(actionCreators, dispatch);
}
