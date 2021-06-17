import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import LabelContainer from "../components/LabelContainer";
import { selectCurrentUser } from "../redux/user/user.selectors";

const HistoryPage = ({ history }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  const { token } = currentUser;
  useEffect(() => {
    axios
      .get("/history", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <LabelContainer onClick={() => history.push("/user")}>
        <span className="flex items-center justify-center space-x-4 cursor-pointer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </span>
          <span className="text-4xl font-light">History Anda</span>
        </span>
      </LabelContainer>

      <div> </div>
    </div>
  );
};

export default withRouter(HistoryPage);
