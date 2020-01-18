import React, { Component } from "react";

import { StyledP } from "./TextOFirmie.styled";
import swiadectwo from "../../../images/swiadectwo.jpg";
import logo2 from "../../../images/logo2.png";
import logo1 from "../../../images/logo1.png";

class TextOFirmie extends Component {
  render() {
    return (
      <>
        <StyledP>
          <div className="container">
            <div className="tittle">
              Obszarem działalności firmy jest szeroko rozumiana wycena
              nieruchomości, doradztwo w&nbsp;zakresie rynku nieruchomości,
              a&nbsp;także usługi w&nbsp;obszarze geodezji i&nbsp;kartografii.
            </div>
            <div className="about">
              Właścicielem firmy jest{" "}
              <p> mgr inż. Krzysztof Butryn, geodeta, rzeczoznawca majątkowy</p>{" "}
              posiadający uprawnienia zawodowe od 2018 roku (numer uprawnień
              7289).
            </div>
            <div className="text1">
              Absolwent Akademii Górniczo-Hutniczej im. S. Staszica
              w&nbsp;Krakowie na Wydziale Geodezji Górniczej i&nbsp;Inżynierii
              Środowiska, kierunek: Geodezja i&nbsp;Kartografia, specjalność:
              Gospodarka nieruchomościamii kataster. Doktorant w&nbsp;Katedrze
              Geodezji Zintegrowanej i&nbsp;Kartografii Wydziału Geodezji
              Górniczej i&nbsp;Inżynierii Środowiska AGH w&nbsp;Krakowie. Autor
              lub współautor kilkunastu publikacji naukowych. Wykładowca na
              Studiach Podyplomowych w&nbsp;zakresie Szacowania Nieruchomości na{" "}
              <p>
                Wydziale Geodezji Górniczej i&nbsp;Inżynierii Środowiska AGH w
                Krakowie.
              </p>
            </div>
            <div className="text2">
              Z&nbsp;wyceną nieruchomości związany nieprzerwanie od 2014 roku.
              Na stanowisku asystenta rzeczoznawcy majątkowego i&nbsp;biegłego
              sądowego z&nbsp;zakresu szacowania nieruchomości brał w&nbsp;tym
              czasie czynny udział przy realizacji ponad 1 000 opracowań
              z&nbsp;zakresu wyceny nieruchomości.
            </div>
          </div>
          <div className="div6">
            <img src={swiadectwo} alt="" />
          </div>
          <div className="container2">
            <div className="logo1">
              {" "}
              <img src={logo1} alt="" />
            </div>
            <div className="logo2">
              {" "}
              <img src={logo2} alt="" />
            </div>
          </div>
        </StyledP>
      </>
    );
  }
}

export default TextOFirmie;