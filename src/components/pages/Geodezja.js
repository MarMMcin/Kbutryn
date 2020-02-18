import React, { Component } from "react";
import { Container, StyledH1, Banner, TopImage, BottomImage } from "./styles";
import geodezja from "../../images/geodezja.jpg";
import geodezja2 from "../../images/geodezja2.jpg";
import TextGeodezja from "../Geodezja/";

class Geodezja extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Banner>
            <TopImage src={geodezja} alt="geodezja" />
            <BottomImage src={geodezja2} alt="geodezja2" />
            <StyledH1>GEODEZJA</StyledH1>
          </Banner>

          <TextGeodezja />
        </Container>
      </>
    );
  }
}

export default Geodezja;
