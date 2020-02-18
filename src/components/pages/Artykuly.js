import React, { Component } from "react";

import { Container, StyledH1, Banner, TopImage, BottomImage } from "./styles";

import artukul from "../../images/artykulBaner.jpg";
import artukul2 from "../../images/artykulBaner1.jpg";
import TextArtykuly from "../Articles/";

class Artykuly extends Component {
  render() {
    return (
      <>
        <Container>
          <Banner>
            <TopImage src={artukul} alt="artukul" />
            <BottomImage src={artukul2} alt="artukul" />
            <StyledH1>ARTYKUŁY</StyledH1>
          </Banner>
          <TextArtykuly />
        </Container>
      </>
    );
  }
}

export default Artykuly;
