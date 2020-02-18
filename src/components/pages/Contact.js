import React, { Component } from "react";

import { Container, StyledH1, Banner, TopImage, BottomImage } from "./styles";

import kontakt1 from "../../images/kontakt1.jpg";
import kontakt2 from "../../images/kontakt2.jpg";
import TextContact from "../Form/";

class Contact extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Banner>
            <TopImage src={kontakt1} alt="kontakt1" />
            <BottomImage src={kontakt2} alt="kontakt2" />
            <StyledH1>KONTAKT</StyledH1>
          </Banner>

          <TextContact />
        </Container>
      </>
    );
  }
}

export default Contact;
