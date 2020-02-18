import React, { Component } from "react";
import { Container, StyledH1, Banner, TopImage, BottomImage } from "./styles";
import TxtPozostale from "../Others/";
import inne1 from "../../images/inne1.jpg";
import inne from "../../images/inne.jpg";

class Pozostale extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Banner>
            {" "}
            <TopImage src={inne1} alt="inne1" />
            <BottomImage src={inne} alt="inne2" />
            <StyledH1>POZOSTAŁE USŁUGI</StyledH1>
          </Banner>

          <TxtPozostale />
        </Container>
      </>
    );
  }
}

export default Pozostale;
