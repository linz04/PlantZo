import React from "react";
import { withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";

const ProfilePage = ({ history }) => {
  return (
    <div className="flex flex-1 flex-col">
      <LabelContainer onClick={() => history.push("/shop")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>Pengaturan &gt; Profil</span>
      </LabelContainer>
    </div>
  );
};

export default withRouter(ProfilePage);
