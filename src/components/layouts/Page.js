import React from "react";
import { Route, Switch } from "react-router-dom";

import OFirmie from "../pages/OFirmie";
import { withRouter } from "react-router-dom";
import Nieruchomosci from "../pages/Nieruchomosci";
import Pozostale from "../pages/Pozostale";
import Geodezja from "../pages/Geodezja";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import MainPage from "../pages/MainPage";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;

  z-index: -15;
`;
const Page = () => {
  return (
    <>
      <Div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/ofirmie" exact component={OFirmie} />
          <Route path="/wycena" component={Nieruchomosci} />
          <Route path="/geodezja" component={Geodezja} />{" "}
          <Route path="/pozostale" component={Pozostale} />
          <Route path="/kontakt" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </Div>
    </>
  );
};

export default withRouter(Page);
