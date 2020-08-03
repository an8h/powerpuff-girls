// @flow

/* 
DetailPage Component: 
It is shown when the user clicks an episode on Home page. 
Rendered UI:
item   : Shows a selected episode
*/

import React, { useState } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import ItemToShow from "../ItemToShow/index";

const DetailPage = (props: Object) => {
  const { location } = props;
  const { state } = location;
  const { clickedItem } = state;
  const [closeButtonClicked, handleClick] = useState(false);

  return (
    <div>
      <ItemToShow item={clickedItem} />
      <Button
        className="button"
        close
        onClick={() => {
          handleClick(true);
        }}
      />
      {closeButtonClicked ? <Redirect to="/" /> : null}
    </div>
  );
};

export default DetailPage;
