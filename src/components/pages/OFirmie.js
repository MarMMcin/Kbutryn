import React, { Component } from "react";

import Krk1 from "../../images/Krk1.jpg";
import Krk2 from "../../images/Krk2.jpg";
import { Container, StyledH1, Banner, TopImage, BottomImage } from "./styles";
import TextOFirmie from "../AboutCompany";

class OFirmie extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Banner>
            <TopImage src={Krk1} alt="Krk1" />
            <BottomImage src={Krk2} alt="Krk2" />
            <StyledH1>O FIRMIE</StyledH1>
          </Banner>

          <TextOFirmie />
        </Container>
      </>
    );
  }
}

export default OFirmie;
