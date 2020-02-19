import React, { Component } from "react";

import {
  Container,
  Tiitle,
  LinkToPublications,
  ArticlesContainer
} from "./styles";
import ArtComponent from "./ArticlesContent";

class ContactText extends Component {
  render() {
    return (
      <>
        <Container>
          <Tiitle>
            <LinkToPublications
              key="agh"
              href="https://bpp.agh.edu.pl/autor/butryn-krzysztof-26487"
            >
              Zapraszam do zapoznania się z wykazem publikacji
            </LinkToPublications>
          </Tiitle>
          <ArticlesContainer>
            <ArtComponent></ArtComponent>
          </ArticlesContainer>
        </Container>
      </>
    );
  }
}

export default ContactText;
