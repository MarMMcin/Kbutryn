import React, { Component } from "react";
import { MenuContainer } from "./Styled/Main.styled";
import Krk1 from "../../images/Krk1.jpg";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <>
        {" "}
        <MenuContainer>
          {" "}
          <Link to="/ofirmie">
            <div className="container">
              <span className="text1">KBUTRYN</span>
              <span className="text2">wycena, nieruchomości, geodezja</span>
            </div>{" "}
          </Link>
          <div className="bg"></div> <img src={Krk1} alt="Krk1" />{" "}
        </MenuContainer>{" "}
      </>
    );
  }
}

export default MainPage;
