import React, { Component } from "react";

import { StyledP } from "./TextNierucho.styled";

class TextNierucho extends Component {
  render() {
    return (
      <>
        <StyledP>
          <span className="info">
            <p className="tittle">
              Wycenę (szacowanie) nieruchomości sporządzamy na zlecenie osób
              fizycznych, osób prawnych, jednostek samorządu terytorialnego,
              urzędów skarbowych oraz instytucji finansowych, w tym banków.
            </p>
            <p className="tittle">
              Wykonywane przez nas wyceny nieruchomości spełniają wszelkie
              wymogi stawiane przez obowiązujące przepisy prawa, a także
              formalne, wynikające z dobrej praktyki i&nbsp;standardów
              zawodowych. Nasze opracowania charakteryzują się również estetyką
              i&nbsp;przejrzystością.
            </p>
            <p className="tittle">
              Nasze wyceny każdorazowo poprzedzone są wnikliwą analizą
              finansowo-ekonomiczną i&nbsp;prawną przedmiotu wyceny, bieżącą
              analizą rynku, wizją lokalną, oceną stanu techniczno-użytkowego
              obiektu wycenianego, szczegółową dokumentacją fotograficzną oraz,
              w razie potrzeby, niezbędnymi pomiarami inwentaryzacyjnymi.
            </p>{" "}
          </span>
          <div className="kropki">
            <div className="container">
              <span className="line">
                Przedmiotami naszych opracowań są w szczególności:
              </span>{" "}
              <ul className="dots">
                <li>
                  nieruchomości gruntowe niezabudowane (m.in. działki budowlane,
                  komercyjne, rolne)
                </li>{" "}
                <li>
                  nieruchomości gruntowe zabudowane (np. budynkami mieszkalnymi
                  jednorodzinnymi){" "}
                </li>{" "}
                <li>
                  obiekty handlowo-usługowe i&nbsp;przemysłowe, hale, magazyny
                </li>
                <li>
                  {" "}
                  nieruchomości lokalowe – lokale mieszkalne, handlowe i
                  usługowe{" "}
                </li>{" "}
                <li>
                  ograniczone prawa rzeczowe: spółdzielcze własnościowe prawo do
                  lokalu, służebność gruntowa, służebność osobista, służebności
                  przesyłu{" "}
                </li>{" "}
                <li>inne prawa związane z nieruchomościami </li>{" "}
                <li>
                  maszyny i&nbsp;urządzenia trwale związane z nieruchomością{" "}
                </li>
              </ul>{" "}
            </div>
            <div className="container">
              <span className="line">
                Dla jakich celów sporządzamy opracowania:
              </span>{" "}
              <ul className="dots">
                <li> dla celów informacji własnych Zleceniodawcy</li>
                <li>
                  aktualnego i optymalnego sposobu użytkowania dla potrzeb
                  zabezpieczenia wierzytelności z tytułu kredytu bankowego
                </li>
                <li> transakcji kupna/sprzedaży nieruchomości</li>
                <li> transakcji leasingowych</li>
                <li> wniesienia aportu do spółki</li>
                <li> sprawozdań finansowanych oraz księgowych</li>
                <li> wyceny praw zobowiązaniowych (najem/dzierżawa)</li>
              </ul>{" "}
            </div>{" "}
            <div className="container">
              <span className="line">
                Sporządzamy również opracowania, takie jak:
              </span>
              <ul className="dots">
                <li> ekspertyzy bankowo-hipotecznej wartości nieruchomości</li>
                <li> audyt prawny, due dilligence nieruchomości </li>
                <li>
                  opinie o nieruchomości dla potrzeb indywidualnego inwestora
                </li>
                <li>
                  inne opracowania z zakresu rynku nieruchomości, w zależności
                  od potrzeb Klienta
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="container">
              <span className="line">Nasze zalety to m.in.:</span>
              <ul className="dots">
                <li> niezawodność i terminowa realizacja zleceń </li>
                <li> rzetelność, profesjonalizm i uczciwość </li>
                <li> doświadczenie i stałe podnoszenie kwalifikacji </li>
                <li> wysokie standardy etyki zawodowej </li>
                <li>
                  wysoki poziom edytorski, estetyka i przejrzystość opracowań{" "}
                </li>
              </ul>{" "}
            </div>
          </div>
        </StyledP>
      </>
    );
  }
}

export default TextNierucho;
