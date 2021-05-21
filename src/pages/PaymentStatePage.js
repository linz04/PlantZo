import React from "react";
import { Route, withRouter } from "react-router";

import InPaidPage from "./InPaidPage";
import PackPage from "./PackPage";
import RatePage from "./RatePage";
import SendPage from "./SendPage";
import UnPaidPage from "./UnPaidPage";

import LabelContainer from "../components/LabelContainer";

const PaymentStatePage = ({ history, match, location }) => {
  console.log(match.path, match.url);

  return (
    <div className="flex flex-1 flex-col">
      <LabelContainer onClick={() => history.push("/checkout")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>Pesanan saya</span>
      </LabelContainer>

      <LabelContainer>
        <div className="flex justify-between flex-1 text-2xl items-center">
          <div
            className={
              location.pathname === `${match.url}/unpaid`
                ? "bg-green-800 px-4 py-2"
                : ""
            }
            onClick={() => history.push(`${match.url}/unpaid`)}
          >
            Belum dibayar
          </div>
          <div
            className={
              location.pathname === `${match.url}/pack`
                ? "bg-green-800 px-4 py-2"
                : ""
            }
            onClick={() => history.push(`${match.url}/pack`)}
          >
            Dalam pengemasan
          </div>
          <div
            className={
              location.pathname === `${match.url}/send`
                ? "bg-green-800 px-4 py-2"
                : ""
            }
            onClick={() => history.push(`${match.url}/send`)}
          >
            Dalam pengiriman
          </div>
          <div
            className={
              location.pathname === `${match.url}/rate`
                ? "bg-green-800 px-4 py-2"
                : ""
            }
            onClick={() => history.push(`${match.url}/rate`)}
          >
            Penilaian produk
          </div>
        </div>
      </LabelContainer>

      <Route exact path={`${match.url}/unpaid`} component={UnPaidPage} />
      <Route exact path={`${match.url}/inpaid`} component={InPaidPage} />
      <Route exact path={`${match.url}/pack`} component={PackPage} />
      <Route exact path={`${match.url}/send`} component={SendPage} />
      <Route exact path={`${match.url}/rate`} component={RatePage} />
    </div>
  );
};

export default withRouter(PaymentStatePage);
