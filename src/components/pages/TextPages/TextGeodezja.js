import React, { Component } from "react";

import { StyledP } from "./TextGeodezja.styled";
import Geodezja3 from "../../../images/geodezja3.png";
class ContactText extends Component {
  render() {
    return (
      <>
        <StyledP>
          <div className="tittle">
            <p>
              Współpracujemy z uprawnionymi geodetami działającymi na terenie
              miasta Krakowa oraz pobliskich powiatów województwa małopolskiego.
            </p>
          </div>
          <p className="tittle two">
            <span className="line">
              Dzięki temu możemy zaoferować Państwu pełen zakres prac
              geodezyjnych, obejmujących m.in.:
            </span>{" "}
          </p>{" "}
          <div className="dots">
            <ul className="kropki">
              <li>mapy do celów projektowych</li>{" "}
              <li>
                tyczenia budynku, budowli lub elementów sieci uzbrojenia terenu
              </li>
              <li>
                inwentaryzacje powykonawcze budynku, budowli lub uzbrojenia
                terenu
              </li>
              <li>wyznaczenie lub wznowienie punktów granicznych</li>{" "}
              <li>• podział nieruchomości (działki)</li>{" "}
              <li>
                {" "}
                inwentaryzacje architektoniczno-budowlane oraz inne pomiary
                inwentaryzacyjne
              </li>{" "}
              <li>mapy co celów prawnych</li>{" "}
              <li> wykazy synchronizacyjne i badanie ksiąg wieczystych </li>{" "}
              <li>projekty służebności gruntowych</li>
            </ul>
          </div>
          <div>
            <img src={Geodezja3} alt="" />
          </div>
        </StyledP>
      </>
    );
  }
}

export default ContactText;
