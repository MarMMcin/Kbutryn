import React, { Component } from "react";

import {
  Wrapper,
  TextContainer,
  TextInContainer,
  BoldText,
  ImageContainer
} from "./styled";
import styled from "styled-components";
import Image from "../pages/TextPages/image";

class TextOFirmie extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <TextContainer>
            <TextInContainer>
              Obszarem działalności firmy jest szeroko rozumiana wycena
              nieruchomości, doradztwo w&nbsp;zakresie rynku nieruchomości,
              a&nbsp;także usługi w&nbsp;obszarze geodezji i&nbsp;kartografii.
            </TextInContainer>
            <TextInContainer>
              Właścicielem firmy jest{" "}
              <BoldText>
                {" "}
                mgr inż. Krzysztof Butryn, geodeta, rzeczoznawca majątkowy
              </BoldText>{" "}
              posiadający uprawnienia zawodowe od 2018 roku (numer uprawnień
              7289).
            </TextInContainer>
            <TextInContainer>
              Absolwent Akademii Górniczo-Hutniczej im. S. Staszica
              w&nbsp;Krakowie na Wydziale Geodezji Górniczej i&nbsp;Inżynierii
              Środowiska, kierunek: Geodezja i&nbsp;Kartografia, specjalność:
              Gospodarka nieruchomościamii kataster. Doktorant w&nbsp;Katedrze
              Geodezji Zintegrowanej i&nbsp;Kartografii Wydziału Geodezji
              Górniczej i&nbsp;Inżynierii Środowiska AGH w&nbsp;Krakowie. Autor
              lub współautor kilkunastu publikacji naukowych. Wykładowca na
              Studiach Podyplomowych w&nbsp;zakresie Szacowania Nieruchomości na{" "}
              Wydziale Geodezji Górniczej i&nbsp;Inżynierii Środowiska AGH
              w&nbsp;Krakowie.
            </TextInContainer>
            <TextInContainer>
              Z&nbsp;wyceną nieruchomości związany nieprzerwanie od 2014 roku.
              Na stanowisku asystenta rzeczoznawcy majątkowego i&nbsp;biegłego
              sądowego z&nbsp;zakresu szacowania nieruchomości brał w&nbsp;tym
              czasie czynny udział przy realizacji ponad 1 000 opracowań
              z&nbsp;zakresu wyceny nieruchomości.
              {/* <div className="container2">
                <a
                  href="https://www.msrm.org.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <div className="logo1">
                    {" "}
                    <img src={logo1} alt="" />
                  </div>
                </a>
                <a
                  href="http://mrn.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <div className="logo2">
                    {" "}
                    <img src={logo2} alt="" />
                  </div>
                </a>
              </div> */}
            </TextInContainer>
          </TextContainer>{" "}
          <ImageContainer>
            <Image></Image>
          </ImageContainer>
        </Wrapper>
      </>
    );
  }
}

export default TextOFirmie;
