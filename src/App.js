import React, { Component } from "react";
import Toolbar from "./components/Toolbar/";
import SideDrawer from "./components/SideDrawer/SideDrawer.js";
import Backdrop from "./components/Backdrop/";
import Page from "./components/layouts/Page";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyle";

import styled from "styled-components";

const StyledPage = styled.div`
  height: 10vh;

  @media (max-width: 768px) {
    height: 0vh;
  }
`;
const NaviDiv = styled.div`
  z-index: 1500;
`;

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <GlobalStyles />
        <StyledPage>
          <NaviDiv style={{ height: "100%" }}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} /> {backdrop}
          </NaviDiv>
        </StyledPage>
        {<Page />}
      </BrowserRouter>
    );
  }
}
export default App;
