import React from "react";
import { Route, withRouter } from "react-router";
import LabelContainer from "../components/LabelContainer";
import InPaidPage from "./InPaidPage";
import PackPage from "./PackPage";
import RatePage from "./RatePage";
import SendPage from "./SendPage";
import UnPaidPage from "./UnPaidPage";

const PaymentStatePage = ({ history, match, location }) => {
  return (
    <div className="flex flex-1 flex-col">
      <LabelContainer
        onClick={() => {
          history.push("/checkout");
        }}
      >
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
          <span className="text-4xl font-light">Pesanan Saya</span>
        </span>
      </LabelContainer>

      {location.pathname === `${match.url}/inpaid` ? null : (
        <LabelContainer>
          <div className="flex justify-between flex-1 text-2xl items-center">
            <div
              className={`${
                location.pathname === `${match.url}/unpaid`
                  ? "bg-green-900 text-white px-4 py-2"
                  : ""
              } cursor-pointer`}
              onClick={() => history.push(`${match.url}/unpaid`)}
            >
              Belum dibayar
            </div>
            <div
              className={`${
                location.pathname === `${match.url}/pack`
                  ? "bg-green-900 text-white px-4 py-2"
                  : ""
              } cursor-pointer`}
              onClick={() => history.push(`${match.url}/pack`)}
            >
              Dalam pengemasan
            </div>
            <div
              className={`${
                location.pathname === `${match.url}/send`
                  ? "bg-green-900 text-white px-4 py-2"
                  : ""
              } cursor-pointer`}
              onClick={() => history.push(`${match.url}/send`)}
            >
              Dalam pengiriman
            </div>
            <div
              className={`${
                location.pathname === `${match.url}/rate`
                  ? "bg-green-900 text-white px-4 py-2"
                  : ""
              } cursor-pointer`}
              onClick={() => history.push(`${match.url}/rate`)}
            >
              Penilaian produk
            </div>
          </div>
        </LabelContainer>
      )}

      {location.pathname === match.url ? (
        <div className="flex flex-1 justify-center items-center text-6xl font-light">
          Periksa keberadaan barang Anda disini
        </div>
      ) : null}

      <Route exact path={`${match.url}/inpaid`} component={InPaidPage} />

      <Route exact path={`${match.url}/unpaid`} component={UnPaidPage} />
      <Route exact path={`${match.url}/pack`} component={PackPage} />
      <Route exact path={`${match.url}/send`} component={SendPage} />
      <Route exact path={`${match.url}/rate`} component={RatePage} />
    </div>
  );
};

export default withRouter(PaymentStatePage);
