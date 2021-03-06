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
import Artykuly from "../pages/Artykuly";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
`;
const Page = () => {
  return (
    <>
      <Wrapper>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/ofirmie" exact component={OFirmie} />
          <Route path="/wycena" component={Nieruchomosci} />
          <Route path="/geodezja" component={Geodezja} />{" "}
          <Route path="/pozostale" component={Pozostale} />
          <Route path="/artykuly" component={Artykuly} />
          <Route path="/kontakt" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </Wrapper>
    </>
  );
};

export default withRouter(Page);
