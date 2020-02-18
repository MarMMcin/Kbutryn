import React, { Component } from "react";

import {
  Wrapper,
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
        <Wrapper>
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
        </Wrapper>
      </>
    );
  }
}

export default ContactText;
