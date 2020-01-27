import React, { Component } from "react";
import { Container, StyledH1, Photos } from "./Styled/Main.styled";
import geodezja from "../../images/geodezja.jpg";
import geodezja2 from "../../images/geodezja2.jpg";
import TextGeodezja from "./TextPages/TextGeodezja";

class Geodezja extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Photos>
            <img className="top" src={geodezja} alt="geodezja" />
            <img className="bottom" src={geodezja2} alt="geodezja2" />
            <StyledH1>GEODEZJA</StyledH1>
          </Photos>

          <TextGeodezja />
        </Container>
      </>
    );
  }
}

export default Geodezja;
