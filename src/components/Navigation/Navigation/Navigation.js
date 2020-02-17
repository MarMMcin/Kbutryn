import React from "react";
import { withRouter } from "react-router";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../../images/nieruch3.jpg";
import MiniLogo from "../../../images/LogoIcon4.png";

const list = [
  { name: "O firmie", path: "/ofirmie", exact: true },
  { name: "Wycena nieruchomości", path: "/wycena" },
  { name: "Geodezja", path: "/geodezja" },
  { name: "Pozostałe usługi", path: "/pozostale" },
  { name: "Artykuły", path: "/artykuly" },
  { name: "Kontakt", path: "/kontakt" }
];

const Menu = styled.div`
  height: 10vh;
  display: flex;
  font-size: 1rem;
  position: absolute;
  flex-direction: row;
  width: 100vw;
  flex-wrap: nowrap;
  justify-content: flex-end;
  overflow: hidden;

  nav {
    display: flex;
  }
  img {
    margin-top: 1vh;
    position: absolute;
    left: 1vw;
    width: auto;
    height: 80%;
    text-align: center;
    z-index: 20;
  }
`;

const LogoAll = styled.div`
  background-image: url(${LogoImg});
  background-position: 25% 15%;
  position: absolute;
  width: 100vw;
  height: 12vh;

  overflow: hidden;
  opacity:0.2;
  z-index: -20;
border-bottom: 1px solid #333;

  
  @media (max-height: 800px) {
    padding-top: 10px;
    font-size: 0.7rem;
  }
  .color {
    color: #ec7801;
  }}
`;

const NavigationLi = styled.li`
  text-align: center;
  font-size: 0.8rem;
  opacity: 1;
  padding-top: 5vh;
  padding-left: 15px;
  list-style-type: none;
  z-index: 200;
  :last-of-type {
    padding-right: 25px;
  }

  a {
    padding: 10px;
    text-decoration: none;
    color: #444;
  }

  a:hover {
    color: #ec7801;
  }
`;

const Navigation = () => {
  const menu = list.map(item => (
    <NavigationLi className="li" key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeClassName="active"
        activeStyle={{
          color: "#ec7801"
        }}
      >
        {item.name}
      </NavLink>
    </NavigationLi>
  ));
  return (
    <>
      <Menu>
        {" "}
        <nav>{menu}</nav>
        <LogoAll> </LogoAll>
        <Link to="/ofirmie">
          {" "}
          <img src={MiniLogo} alt="logomini" />
        </Link>
      </Menu>
    </>
  );
};

export default withRouter(Navigation);
