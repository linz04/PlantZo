import React from "react";
import { Route, withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";
import PackPage from "./PackPage";
import RatePage from "./RatePage";
import SendPage from "./SendPage";
import UnPaidPage from "./UnPaidPage";

const PaymentStatePage = ({ history, match }) => {
  console.log(match);

  return (
    <div className="flex flex-1 flex-col">
      <LabelContainer onClick={() => history.push("/checkout")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>Pesanan saya</span>
      </LabelContainer>

      <LabelContainer>
        <div className="flex justify-between flex-1 text-2xl">
          <div onClick={() => history.push(`${match.url}/unpaid`)}>
            Belum dibayar
          </div>
          <div onClick={() => history.push(`${match.url}/pack`)}>
            Dalam pengemasan
          </div>
          <div onClick={() => history.push(`${match.url}/send`)}>
            Dalam pengiriman
          </div>
          <div onClick={() => history.push(`${match.url}/rate`)}>
            Penilaian produk
          </div>
        </div>
      </LabelContainer>

      <Route exact path={`${match.path}/unpaid`} component={UnPaidPage} />
      <Route exact path={`${match.path}/pack`} component={PackPage} />
      <Route exact path={`${match.path}/send`} component={SendPage} />
      <Route exact path={`${match.path}/rate`} component={RatePage} />
    </div>
  );
};

export default withRouter(PaymentStatePage);
