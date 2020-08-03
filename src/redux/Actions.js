// @flow

/* 
Actions for:
Movie
Episodes

Each Action has three different dispatch states:
_LOADING
_SUCCESS
_FAIL
*/

import ApiConnect from "../services/ApiConnect";
import { types } from "../config";

export function action(type: string, id: string) {
  let response = {};
  return async (dispatch: Function) => {
    dispatch({ type: `GET_${type}_LOADING` });
    switch (type) {
      case "MOVIE": {
        response = await ApiConnect.getMovie(id);
        break;
      }
      case "EPISODES": {
        response = await ApiConnect.getEpisodes(id);
        break;
      }

      default:
        break;
    }

    dispatch({
      type:
        response.status === 200 ? `GET_${type}_SUCCESS` : `GET_${type}_FAIL`,
      movie: response,
    });
  };
}

export function getMovie(movieId: string) {
  return action(types[0] === "MOVIE" ? types[0] : "MOVIE", movieId);
}
export function getEpisodes(movieId: string) {
  return action(types[1] === "EPISODES" ? types[1] : "EPISODES", movieId);
}
