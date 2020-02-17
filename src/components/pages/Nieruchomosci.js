import React, { Component } from "react";
import nieruchomosc from "../../images/nieruchomosc.jpg";
import nieruchomosc2 from "../../images/nieruchomosc2.jpg";
import { Container, StyledH1, Photos } from "./Styled/Main.styled";
import TextNierucho from "../Nieruchomosci";

class Nieruchomosci extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Photos>
            <img className="top" src={nieruchomosc} alt="nieruchomosc" />
            <img className="bottom" src={nieruchomosc2} alt="nieruchomosc2" />
            <StyledH1>WYCENA NIERUCHOMOŚCI</StyledH1>
          </Photos>

          <TextNierucho />
        </Container>
      </>
    );
  }
}

export default Nieruchomosci;
