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
import { MOVIE_ID } from "../../config";
import groupEpisodesBySeasons from "../../utils";

type Props = {
  getMovie: Function,
  getEpisodes: Function,
  movie: Object,
  movieIsLoading: Boolean,
  episodes: Object,
  episodesIsLoading: Boolean,
};

class Home extends React.Component<Props> {
  componentDidMount() {
    const { getMovie, getEpisodes } = this.props;

    // Make the API call and get the needed data
    getMovie(MOVIE_ID);
    getEpisodes(MOVIE_ID);
  }

  render() {
    const { movie, movieIsLoading, episodes, episodesIsLoading } = this.props;
    const episodesBySeasons = groupEpisodesBySeasons(episodes);

    return (
      <div>
        <ItemToShow item={movie} />
        {Object.keys(episodesBySeasons).map((key) => {
          return (
            <div key={key}>
              <h1>Season {key}</h1>
              <Episodes key={key} episodes={episodesBySeasons[key]} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    movie: state.getMovie.data,
    movieIsLoading: state.getMovie.isLoading,
    episodes: state.getEpisodes.data,
    episodesIsLoading: state.getEpisodes.isLoading,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Home);
