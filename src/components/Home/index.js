/* eslint-disable no-nested-ternary */
// @flow

/* 
Home Component: 
It is the first shown page when the user runs the app. 
Rendered UI:
movie      : Shows the Powerpuff movie details
episodes   : Shows a list of episodes seperated by season
*/

import React from "react";
import { connect } from "react-redux";
import { mapDispachToProps } from "../../redux/Store";
import ItemToShow from "../ItemToShow/index";
import Episodes from "../Episodes/index";
import Loading from "../Loading/index";
import ErrorMessage from "../ErrorMessage/index";
import { MOVIE_ID } from "../../config";
import groupEpisodesBySeasons from "../../utils";

type Props = {
  getMovie: Function,
  getEpisodes: Function,
  movie: Object,
  movieIsLoading: Boolean,
  movieError: Array<string>,
  episodes: Object,
  episodesIsLoading: Boolean,
  episodesError: Array<string>,
};

class Home extends React.Component<Props> {
  componentDidMount() {
    const { getMovie, getEpisodes } = this.props;

    // Make the API call and get the needed data
    getMovie(MOVIE_ID);
    getEpisodes(MOVIE_ID);
  }

  render() {
    const {
      movie,
      movieIsLoading,
      movieError,
      episodes,
      episodesIsLoading,
      episodesError,
    } = this.props;
    const episodesBySeasons = groupEpisodesBySeasons(episodes);

    return (
      <div>
        {movieIsLoading ? (
          <Loading />
        ) : movieError.length <= 0 ? (
          <ItemToShow item={movie} />
        ) : (
          <ErrorMessage />
        )}

        {episodesIsLoading ? (
          <Loading />
        ) : episodesError.length <= 0 ? (
          Object.keys(episodesBySeasons).map((key) => {
            return (
              <div key={key}>
                <h1>Season {key}</h1>
                <Episodes key={key} episodes={episodesBySeasons[key]} />
              </div>
            );
          })
        ) : (
          <ErrorMessage />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    movie: state.getMovie.data,
    movieIsLoading: state.getMovie.isLoading,
    movieError: state.getMovie.errors,
    episodes: state.getEpisodes.data,
    episodesIsLoading: state.getEpisodes.isLoading,
    episodesError: state.getEpisodes.errors,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Home);
