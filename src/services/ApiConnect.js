// @flow

/*
API calls for:
Movie
Episodes
*/

import axios from "axios";
import { BASE_URL } from "../config";

const getData = (url) => {
  return axios
    .get(url)
    .then((res) => res)
    .catch((error) => error);
};

export default {
  getMovie: (id: string) => getData(`${BASE_URL}/shows/${id}`),
  getEpisodes: (id: string) => getData(`${BASE_URL}/shows/${id}/episodes`),
};
