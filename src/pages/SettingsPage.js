import React from "react";
import { Route, withRouter } from "react-router";
import ProfilePage from "./ProfilePage";

const SettingsPage = ({ history, match }) => {
  return (
    <div className="flex flex-1 flex-col">
      <Route path={`${match.url}/profile`} component={ProfilePage} />
    </div>
  );
};

export default withRouter(SettingsPage);
