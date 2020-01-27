import React, { Component } from "react";
import { Container, StyledH1, Photos } from "./Styled/Main.styled";
import TxtPozostale from "./TextPages/TextPozostale";
import inne1 from "../../images/inne1.jpg";
import inne from "../../images/inne.jpg";

class Pozostale extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Photos>
            <img className="top" src={inne1} alt="inne1" />
            <img className="bottom" src={inne} alt="inne2" />
            <StyledH1>POZOSTAŁE USŁUGI</StyledH1>
          </Photos>

          <TxtPozostale />
        </Container>
      </>
    );
  }
}

export default Pozostale;
