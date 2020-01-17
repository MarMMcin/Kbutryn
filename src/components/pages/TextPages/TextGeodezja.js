import React, { Component } from "react";

import { StyledP } from "./TextGeodezja.styled";
import Geodezja3 from "../../../images/geodezja3.png";
class TextContact extends Component {
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
            <p>• mapy do celów projektowych</p>{" "}
            <p>
              • tyczenia budynku, budowli lub elementów sieci uzbrojenia terenu{" "}
            </p>
            <p>
              • inwentaryzacje powykonawcze budynku, budowli lub uzbrojenia
              terenu
            </p>{" "}
            <p>• wyznaczenie lub wznowienie punktów granicznych</p>{" "}
            <p>• podział nieruchomości (działki)</p>
            <p>
              {" "}
              • inwentaryzacje architektoniczno-budowlane oraz inne pomiary
              inwentaryzacyjne
            </p>
            <p> • mapy co celów prawnych</p>
            <p> • wykazy synchronizacyjne i badanie ksiąg wieczystych</p>
            <p> • projekty służebności gruntowych</p>
          </div>
          <div>
            <img src={Geodezja3} alt="" />
          </div>
        </StyledP>
      </>
    );
  }
}

export default TextContact;
