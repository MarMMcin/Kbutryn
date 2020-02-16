import React, { Component } from "react";

import { Wrapper, Container } from "./TextArtykuly.styled";
import ArtComponent from "./ArtComponent";
class ContactText extends Component {
  render() {
    return (
      <>
        <Wrapper>
          {" "}
          <Container>
            <div className="tittle">
              <a
                key="agh"
                href="https://bpp.agh.edu.pl/autor/butryn-krzysztof-26487"
              >
                Zapraszam do zapoznania się z wykazem publikacji
              </a>{" "}
            </div>

            <div className="content">
              {" "}
              <ArtComponent></ArtComponent>
            </div>
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default ContactText;
