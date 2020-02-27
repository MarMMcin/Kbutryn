import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/LogoIcon4.png";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: fixed;
  width: 65vw;
  top: 0;
  left: 0;
  background-color: white;
  padding: 0;
  border: none;
  border-bottom: 1px solid black;
  z-index: 10000;
  outline: none;
  &:hover {
  }
`;

const LogoWrapper = styled.div`
  position: fixed;
  left: 80%;
  transform: translate(-50%);
`;
const Logo = styled.img`
   z-index: 10000;
 margin: 5px 0 0 15vw;
  width: 100px;
  height: auto;

  }
`;
const Div = styled.div`
  position: fixed;
  width: 50vw;
  height: 43px;
  background-color: white;
  right: 0;
  border-bottom: 1px solid black;
`;
const IconBurger = styled.div`
  display: flex;
  margin: 10px;
  color: #ec7801;
  font-size: 22px;
`;
const drawerToogleButton = props => (
  <>
    <ToggleButton onClick={props.click}>
      <LogoWrapper></LogoWrapper>
      <IconBurger>
        <i className="fas fa-bars"></i>
      </IconBurger>
    </ToggleButton>
    <Div>
      <Link to="/ofirmie">
        <Logo src={logo} alt="logo" />
      </Link>
    </Div>
  </>
);

export default drawerToogleButton;
