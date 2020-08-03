// @flow

/* 
Reducers for:
Movie
Episodes
Episode

Each Reducer handles three different dispatch states:
_LOADING
_SUCCESS
_FAIL
*/

import DefaultState from "./DefaultState";

export function getMovie(state: Object = DefaultState.movie, action: Function) {
  switch (action.type) {
    case "GET_MOVIE_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_MOVIE_FAIL":
      return {
        ...state,
        isLoading: false,
        errors: action.movie,
      };
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        data: action.movie.data,
        isLoading: false,
        errors: [],
      };
    default:
      return state;
  }
}

export function getEpisodes(
  state: Object = DefaultState.episodes,
  action: Function
) {
  switch (action.type) {
    case "GET_EPISODES_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_EPISODES_FAIL":
      return {
        ...state,
        isLoading: false,
        errors: action.movie,
      };
    case "GET_EPISODES_SUCCESS":
      return {
        ...state,
        data: action.movie.data,
        isLoading: false,
        errors: [],
      };
    default:
      return state;
  }
}
