import React, { Component } from "react";
import nieruchomosc from "../../images/nieruchomosc.jpg";
import nieruchomosc2 from "../../images/nieruchomosc2.jpg";
import { Container, StyledH1, Banner, TopImage, BottomImage } from "./styles";
import TextNierucho from "../Nieruchomosci";

class Nieruchomosci extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Banner>
            <TopImage src={nieruchomosc} alt="nieruchomosc" />
            <BottomImage src={nieruchomosc2} alt="nieruchomosc2" />
            <StyledH1>WYCENA NIERUCHOMOŚCI</StyledH1>
          </Banner>

          <TextNierucho />
        </Container>
      </>
    );
  }
}

export default Nieruchomosci;
