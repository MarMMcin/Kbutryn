import React, { Component } from "react";

import { StyledP } from "./TextArtykuly.styled";
import ArtComponent from "./ArtComponent";
class TextContact extends Component {
  render() {
    return (
      <>
        <StyledP>
          {" "}
          <div className="container">
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
          </div>
        </StyledP>
      </>
    );
  }
}

export default TextContact;
