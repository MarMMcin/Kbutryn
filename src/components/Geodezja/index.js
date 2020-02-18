import React, { Component } from "react";

import {
  Wrapper,
  BoldTiitleContainer,
  SecondText,
  DotsList,
  Image,
  SecondTextContainer,
  Dot
} from "./styles";
import Geodezja3 from "../../images/geodezja3.png";
class ContactText extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <BoldTiitleContainer>
            Współpracujemy z uprawnionymi geodetami działającymi na terenie
            miasta Krakowa oraz pobliskich powiatów województwa małopolskiego.
          </BoldTiitleContainer>
          <SecondTextContainer>
            <SecondText>
              Dzięki temu możemy zaoferować Państwu pełen zakres prac
              geodezyjnych, obejmujących m.in.:
            </SecondText>
          </SecondTextContainer>
          <DotsList>
            <Dot>mapy do celów projektowych</Dot>{" "}
            <Dot>
              tyczenia budynku, budowli lub elementów sieci uzbrojenia terenu
            </Dot>
            <Dot>
              inwentaryzacje powykonawcze budynku, budowli lub uzbrojenia terenu
            </Dot>
            <Dot>wyznaczenie lub wznowienie punktów granicznych</Dot>{" "}
            <Dot>podział nieruchomości (działki)</Dot>{" "}
            <Dot>
              {" "}
              inwentaryzacje architektoniczno-budowlane oraz inne pomiary
              inwentaryzacyjne
            </Dot>{" "}
            <Dot>mapy co celów prawnych</Dot>{" "}
            <Dot> wykazy synchronizacyjne i badanie ksiąg wieczystych </Dot>{" "}
            <Dot>projekty służebności gruntowych</Dot>
          </DotsList>
          <Image src={Geodezja3} alt="geodezja" />
        </Wrapper>
      </>
    );
  }
}

export default ContactText;
