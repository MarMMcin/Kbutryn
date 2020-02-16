import React, { Component } from "react";

import { Container, StyledH1, Photos } from "./Styled/Main.styled";

import kontakt1 from "../../images/kontakt1.jpg";
import kontakt2 from "../../images/kontakt2.jpg";
import TextContact from "./Form/ContactText";

class Contact extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <Photos>
            <img className="top" src={kontakt1} alt="kontakt1" />
            <img className="bottom" src={kontakt2} alt="kontakt2" />
            <StyledH1>KONTAKT</StyledH1>
          </Photos>

          <TextContact />
        </Container>
      </>
    );
  }
}

export default Contact;
