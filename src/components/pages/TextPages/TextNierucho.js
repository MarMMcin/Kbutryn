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
              zawodowych.Nasze opracowania charakteryzują się również estetyką
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
                <p>
                  • nieruchomości gruntowe niezabudowane (m.in. działki
                  budowlane, komercyjne, rolne)
                </p>{" "}
                <p>
                  • nieruchomości gruntowe zabudowane (np. budynkami
                  mieszkalnymi jednorodzinnymi){" "}
                </p>{" "}
                <p>
                  • obiekty handlowo-usługowe i&nbsp;przemysłowe, hale, magazyny
                </p>
                <p>
                  {" "}
                  • nieruchomości lokalowe – lokale mieszkalne, handlowe i
                  usługowe{" "}
                </p>{" "}
                <p>
                  • ograniczone prawa rzeczowe: spółdzielcze własnościowe prawo
                  do lokalu, służebność gruntowa, służebność osobista,
                  służebności przesyłu{" "}
                </p>{" "}
                <p>• inne prawa związane z nieruchomościami </p>{" "}
                <p>
                  • maszyny i&nbsp;urządzenia trwale związane z nieruchomością{" "}
                </p>
              </ul>{" "}
            </div>
            <div className="container">
              <span className="line">
                Dla jakich celów sporządzamy opracowania:
              </span>{" "}
              <ul className="dots">
                <p> • dla celów informacji własnych Zleceniodawcy</p>
                <p>
                  • aktualnego i optymalnego sposobu użytkowania dla potrzeb
                  zabezpieczenia wierzytelności z tytułu kredytu bankowego
                </p>
                <p>• transakcji kupna/sprzedaży nieruchomości</p>
                <p>• transakcji leasingowych</p>
                <p>• wniesienia aportu do spółki</p>
                <p>• sprawozdań finansowanych oraz księgowych</p>
                <p>• wyceny praw zobowiązaniowych (najem/dzierżawa)</p>
              </ul>{" "}
            </div>{" "}
            <div className="container">
              <span className="line">
                Sporządzamy również opracowania, takie jak:
              </span>
              <ul className="dots">
                <p>• ekspertyzy bankowo-hipotecznej wartości nieruchomości</p>
                <p>• audyt prawny, due dilligence nieruchomości </p>
                <p>
                  • opinie o nieruchomości dla potrzeb indywidualnego inwestora
                </p>
                <p>
                  • inne opracowania z zakresu rynku nieruchomości, w zależności
                  od potrzeb Klienta
                </p>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="container">
              <span className="line">Nasze zalety to m.in.:</span>
              <ul className="dots">
                <p>• niezawodność i terminowa realizacja zleceń </p>
                <p>• rzetelność, profesjonalizm i uczciwość </p>
                <p>• doświadczenie i stałe podnoszenie kwalifikacji </p>
                <p>• wysokie standardy etyki zawodowej </p>
                <p>
                  • wysoki poziom edytorski, estetyka i przejrzystość opracowań{" "}
                </p>
              </ul>{" "}
            </div>
          </div>
        </StyledP>
      </>
    );
  }
}

export default TextNierucho;
