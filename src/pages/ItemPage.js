import React from "react";
import { withRouter } from "react-router";

const ItemPage = ({ match }) => {
  return (
    <div>
      <div>Testing param Url : {match.params.itemId}</div>
    </div>
  );
};

export default withRouter(ItemPage);
