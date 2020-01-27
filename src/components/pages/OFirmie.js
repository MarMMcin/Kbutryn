import React, { Component } from "react";

import Krk1 from "../../images/Krk1.jpg";
import Krk2 from "../../images/Krk2.jpg";
import { Container, StyledH1, Photos } from "./Styled/Main.styled";
import TextOFirmie from "./TextPages/TextOFirmie";

class OFirmie extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Photos>
            <img className="top" src={Krk1} alt="Krk1" />
            <img className="bottom" src={Krk2} alt="Krk2" />
            <StyledH1>O FIRMIE</StyledH1>
          </Photos>

          <TextOFirmie />
        </Container>
      </>
    );
  }
}

export default OFirmie;
