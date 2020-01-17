import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer.js";
import Backdrop from "./components/Backdrop/Backdrop";
import Page from "./components/layouts/Page";
import Footer from "./components/layouts/Footer";

import { BrowserRouter } from "react-router-dom";

import styled from "styled-components";

const StyledPage = styled.div`
  overflow: hidden !important;
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
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} /> {backdrop}
        </div>
        {<Page />}
        {/* {<Footer></Footer>} */}
      </BrowserRouter>
    );
  }
}
export default App;
