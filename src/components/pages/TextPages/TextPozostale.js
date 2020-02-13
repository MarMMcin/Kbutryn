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
                  dotyczące powierzchni użytkowej pozostają niespójne
                  i&nbsp;nieprecyzyjne, a ich interpretacja – kłopotliwa.
                </p>
                <br></br>
              </span>
              <span className="line">Nasza firma oferuje Państwu m.in.:</span>{" "}
              <ul className="dots">
                <li>
                  wykonanie obmiaru powierzchni użytkowej budynku/lokalu zgodnie
                  z&nbsp;odpowiednią Normą
                </li>{" "}
                <li>sporządzenie dokumentacji inwentaryzacyjnej</li> <br></br>
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
                  przedmiotowej nieruchomości, która może (w&nbsp;zależności od
                  rodzaju nieruchomości) obejmować m.in.:
                </p>
                <br></br>
              </span>
              <ul className="dots">
                {" "}
                <li> badanie stanu prawnego nieruchomości </li>
                <li>
                  analizę nieruchomości w aspekcie wskazania ewentualnych wad
                  prawnych{" "}
                </li>
                <li> weryfikację stanu techniczno-użytkowego nieruchomości </li>
                <li> analizę uwarunkowań planistycznych </li>
                <li>
                  weryfikację wydanej dla przedmiotowej nieruchomości
                  dokumentacji (różnego typu){" "}
                </li>
                <li>
                  inwentaryzację nieruchomości oraz obmiar powierzchni użytkowej
                  budynku/lokalu{" "}
                </li>
                <li> analizę lokalnego rynku nieruchomości podobnych</li>
              </ul>
            </div>
            <div className="div3">
              <p className="undertext">
                Nasza firma oferuje Państwu usługi z&nbsp;zakresu kompleksowej
                oceny nieruchomości oraz wskazania obszarów ryzyk związanych
                z&nbsp;nieruchomością, a&nbsp;w&nbsp;szczególności rzetelną i
                profesjonalną wycenę nieruchomości.
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
