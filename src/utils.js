/* eslint-disable no-param-reassign */
// @flow

const groupEpisodesBySeasons = (episodes: Object) => {
  return episodes.reduce((r, a) => {
    r[a.season] = r[a.season] || [];
    r[a.season].push(a);
    return r;
  }, Object.create(null));
};

export default groupEpisodesBySeasons;
