import React, { Component } from "react";

import { Container, StyledH1, Photos } from "./Styled/Main.styled";

import kontakt1 from "../../images/artykulBaner.jpg";
import kontakt2 from "../../images/artykulBaner1.jpg";
import TextArtykuly from "./Articles/TextArtykuly";

class Artykuly extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Photos>
            <img className="top" src={kontakt1} alt="kontakt3" />
            <img className="bottom" src={kontakt2} alt="kontakt4" />
            <StyledH1>ARTYKUŁY</StyledH1>
          </Photos>

          <TextArtykuly />
        </Container>
      </>
    );
  }
}

export default Artykuly;
