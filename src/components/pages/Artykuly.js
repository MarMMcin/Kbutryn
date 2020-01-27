import React, { Component } from "react";

import { Container, StyledH1, Photos } from "./Styled/Main.styled";

import kontakt1 from "../../images/kontakt1.jpg";
import kontakt2 from "../../images/kontakt2.jpg";
import TextArtykuly from "./TextPages/TextArtykuly";

class Artykuly extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Photos>
            <img className="top" src={kontakt1} alt="kontakt3" />
            <img className="bottom" src={kontakt2} alt="kontakt4" />
            <StyledH1>ARTYKULY</StyledH1>
          </Photos>

          <TextArtykuly />
        </Container>
      </>
    );
  }
}

export default Artykuly;
