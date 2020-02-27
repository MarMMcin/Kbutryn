import React from "react";
import { withRouter } from "react-router";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 768px) {
    .toolbar__dTB {
      position: relative;
    }
    .toolbar_navigation-items {
      position: relative;
      display: none;
    }
    .toolbar {
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;

      background-position: 25% 15%;
      height: 45px;
    }
    .toolbar::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;

      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 769px) {
    .toolbar__dTB {
      display: none;
    }
  }
`;

const toolbar = props => (
  <Container>
    <div className="navigation_links">
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__dTB">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
            <section className="page">
              <Navigation />
            </section>
          </div>
        </nav>
      </header>
    </div>
  </Container>
);

export default withRouter(toolbar);
