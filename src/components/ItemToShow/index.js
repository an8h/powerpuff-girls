/* eslint-disable react/no-danger */
// @flow

/* 
ItemToShow Component: 
It is shown at Home page and at the Detail page.
Rendered UI:
originalImage  : The poster image of the item
name           : The title of the item
summary        : The summary of the item
averageRating  : The average rating  of the item
*/

import React from "react";
import fallbackPoster from "../../img/no-image-icon-23494.png";

const ItemToShow = (props: Object) => {
  const { item } = props;
  const { name, summary, image, rating } = item;
  const originalImage = image ? image.original : fallbackPoster;
  const averageRating = rating ? rating.average : 0.0;

  return (
    <div>
      {!item || item.length === 0 ? null : (
        <div className="container">
          <img
            className="image"
            src={originalImage}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackPoster;
              e.target.style = "object-fit: contain;";
            }}
          />

          <div className="text">
            <h2>{name}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: summary,
              }}
            />
            {averageRating ? <h3>Rating: {averageRating}</h3> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemToShow;
