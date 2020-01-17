import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../images/nieruch3.jpg";
import MiniLogo from "../../images/LogoIcon4.png";

const list = [
  { name: "Strona główna", path: "/", exact: true },
  { name: "O firmie", path: "/ofirmie", exact: true },
  { name: "Wycena nieruchomości", path: "/wycena" },
  { name: "Geodezja", path: "/geodezja" },
  { name: "Pozostałe usługi", path: "/pozostale" },
  { name: "Kontakt", path: "/kontakt" }
];

const Menu = styled.div`
  height: 10vh;
  display: flex;
  font-size: 2vh;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  overflow: hidden;

  nav {
    display: flex;
    position: relative;
    justify-content: flex-end;
  }
  img {
    margin-top: 1.5vh;
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
    font-size: 14px;
  }
  .color {
    color: #ec7801;
  }}
`;

const StyledLi = styled.li`
  text-align: center;
  font-size: 1.5vh;
  opacity: 1;
  padding-top: 5vh;
  padding-left: 25px;
  list-style-type: none;
  z-index: 200;
  :last-of-type {
    padding-right: 25px;
  }
  /* @media (max-width: 1440px) {
    width: 11vw;
  }
  @media (max-width: 800px) {
    width: 15vw;
    font-size: 6px;
  } */
  a {
    text-decoration: none;
    color: #444;
  }

  a:hover {
    color: #ec7801;
  }
`;

const Navigation = () => {
  const menu = list.map(item => (
    <StyledLi className="li" key={item.name}>
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
    </StyledLi>
  ));
  return (
    <>
      <Menu>
        {" "}
        <nav>{menu}</nav>
        <LogoAll> </LogoAll> <img src={MiniLogo} alt="logomini" />
      </Menu>
    </>
  );
};

export default withRouter(Navigation);
