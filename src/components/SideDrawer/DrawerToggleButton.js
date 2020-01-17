import React from "react";

import styled from "styled-components";

const ToggleButton = styled.button`
  position: fixed;
  top: 0px;
  left: 0;
  background-color: transparent;
  padding: 0;
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  z-index: 5;
  outline: none;
  &:hover {
  }
`;
const IconBurger = styled.div`
  color: black;
  font-size: 28px;
`;
const drawerToogleButton = props => (
  <ToggleButton onClick={props.click}>
    <IconBurger>
      <i className="fas fa-bars"></i>
    </IconBurger>
  </ToggleButton>
);

export default drawerToogleButton;
