/* eslint-disable react/no-array-index-key */
// @flow

/* 
Episodes Component: 
It is shown when the data of each episode are fetched at Home page.
Rendered UI:
Table       : A table showing a list of episodes
name        : The title of the episode
airdate     : The date which the episode was on air
*/

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Table } from "reactstrap";

const Episodes = (props: Object) => {
  const { episodes } = props;
  const [clicked, handleClick] = useState(false);
  const [clickedItem, setClickedItem] = useState();

  return (
    <div className="table-container">
      <Table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode, index) => (
            <tr
              key={index}
              onClick={() => {
                handleClick(true);
                setClickedItem(episode);
              }}
            >
              <th scope="row">{index + 1}</th>
              <td>{episode.airdate}</td>
              <td>{episode.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {clicked ? (
        <Redirect
          push
          to={{
            pathname: "/detail",
            state: { clickedItem },
          }}
        />
      ) : null}
    </div>
  );
};

export default Episodes;
