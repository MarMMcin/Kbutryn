import React, { Component } from "react";
import { StyledP } from "./TextPozostale.styled";
import { Link } from "react-router-dom";
class TextNierucho extends Component {
  render() {
    return (
      <>
        <StyledP>
          <div className="container">
            <div className="div1">
              <h2>OBMIAR I&nbsp;OBLICZANIE POWIERZCHNI UŻYTKOWEJ</h2>
              <span className="info">
                <p>
                  Określanie pola powierzchni użytkowej budynków i&nbsp;lokali
                  jest procesem istotnym, przede wszystkim ze względu na szeroki
                  zakres wykorzystania tej informacji. Stanowi ono przede
                  wszystkich podstawę opodatkowania budynków i&nbsp;lokali, jest
                  też najczęściej stosowanym przelicznikiem wartości
                  nieruchomości gruntowych zabudowanych oraz nieruchomości
                  lokalowych. Jednocześnie obowiązujące uregulowania prawne
                  dotyczące rejestrowania powierzchni użytkowej pozostają
                  niespójne i&nbsp;nieprecyzyjne, a ich interpretacja –
                  kłopotliwa.
                </p>
                <br></br>
              </span>
              <span className="line">Nasza firma oferuje Państwu m.in.:</span>{" "}
              <ul className="dots">
                <p>
                  • wykonanie obmiaru powierzchni użytkowej budynku/lokalu
                  zgodnie z&nbsp;odpowiednią Normą
                </p>{" "}
                <p>• sporządzenie dokumentacji inwentaryzacyjnej</p> <br></br>
              </ul>{" "}
            </div>

            <div className="div2">
              <h3>AUDYT NIERUCHOMOŚCI</h3>
              <span className="info">
                <p>
                  Zakup nieruchomości, zwłaszcza dla potrzeb zaspokojenia
                  własnych potrzeb mieszkaniowych, jest zwykle jedną z
                  najważniejszych decyzji w życiu, a na pewno jest decyzją o
                  bardzo poważnych konsekwencjach finansowych. Dlatego też
                  proces kupna warto poprzedzić szczegółową analizą
                  przedmiotowej nieruchomości, która może (w zależności od
                  rodzaju nieruchomości) obejmować m.in.:
                </p>
                <br></br>
              </span>
              <ul className="dots">
                {" "}
                <p> • badanie stanu prawnego nieruchomości </p>
                <p>
                  • analizę nieruchomości w aspekcie wskazania ewentualnych wad
                  prawnych{" "}
                </p>
                <p> • weryfikację stanu techniczno-użytkowego nieruchomości </p>
                <p> • analizę uwarunkowań planistycznych </p>
                <p>
                  • weryfikację wydanej dla przedmiotowej nieruchomości
                  dokumentacji (różnego typu){" "}
                </p>
                <p>
                  • inwentaryzację nieruchomości oraz obmiar powierzchni
                  użytkowej budynku/lokalu{" "}
                </p>
                <p>• analizę lokalnego rynku nieruchomości podobnych</p>
              </ul>
            </div>
            <div className="div3">
              <p className="undertext">
                Nasza firma oferuje Państwu usługi z&nbsp;zakresu kompleksowej
                oceny nieruchomości oraz wskazania obszarów ryzyk związanych
                z&nbsp;i&nbsp;nieruchomością, a&nbsp;w&nbsp;szczególności
                rzetelną i profesjonalną wycenę nieruchomości.
              </p>{" "}
              <Link to="/Kontakt">
                <button className="btn1">
                  Zachęcamy do kontaktu drogą telefoniczną lub mailową celem
                  uzyskania szczegółowych informacji oraz bezpłatnej wyceny
                  kosztów zlecenia.
                </button>
              </Link>
            </div>
          </div>
        </StyledP>
      </>
    );
  }
}

export default TextNierucho;
