import React, { Component } from "react";

import {
  Wrapper,
  TextInInfo,
  LargeDotsContainer,
  SingleDotsContainer,
  TittleSingleContainer,
  DotsList,
  Dot
} from "./style";

class TextNierucho extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <TextInInfo>
            Wycenę (szacowanie) nieruchomości sporządzamy na zlecenie osób
            fizycznych, osób prawnych, jednostek samorządu terytorialnego,
            urzędów skarbowych oraz instytucji finansowych, w tym banków.
          </TextInInfo>
          <TextInInfo>
            Wykonywane przez nas wyceny nieruchomości spełniają wszelkie wymogi
            stawiane przez obowiązujące przepisy prawa, a także formalne,
            wynikające z dobrej praktyki i&nbsp;standardów zawodowych. Nasze
            opracowania charakteryzują się również estetyką
            i&nbsp;przejrzystością.
          </TextInInfo>
          <TextInInfo>
            Nasze wyceny każdorazowo poprzedzone są wnikliwą analizą
            finansowo-ekonomiczną i&nbsp;prawną przedmiotu wyceny, bieżącą
            analizą rynku, wizją lokalną, oceną stanu techniczno-użytkowego
            obiektu wycenianego, szczegółową dokumentacją fotograficzną oraz, w
            razie potrzeby, niezbędnymi pomiarami inwentaryzacyjnymi.
          </TextInInfo>{" "}
          <LargeDotsContainer>
            <SingleDotsContainer>
              <TittleSingleContainer>
                Przedmiotami naszych opracowań są w szczególności:
              </TittleSingleContainer>{" "}
              <DotsList>
                <Dot>
                  nieruchomości gruntowe niezabudowane (m.in. działki budowlane,
                  komercyjne, rolne)
                </Dot>{" "}
                <Dot>
                  nieruchomości gruntowe zabudowane (np. budynkami mieszkalnymi
                  jednorodzinnymi){" "}
                </Dot>{" "}
                <Dot>
                  obiekty handlowo-usługowe i&nbsp;przemysłowe, hale, magazyny
                </Dot>
                <Dot>
                  {" "}
                  nieruchomości lokalowe – lokale mieszkalne, handlowe i
                  usługowe{" "}
                </Dot>{" "}
                <Dot>
                  ograniczone prawa rzeczowe: spółdzielcze własnościowe prawo do
                  lokalu, służebność gruntowa, służebność osobista, służebności
                  przesyłu{" "}
                </Dot>{" "}
                <Dot>inne prawa związane z nieruchomościami </Dot>{" "}
                <Dot>
                  maszyny i&nbsp;urządzenia trwale związane z nieruchomością{" "}
                </Dot>
              </DotsList>{" "}
            </SingleDotsContainer>
            <SingleDotsContainer>
              <TittleSingleContainer>
                Dla jakich celów sporządzamy opracowania:
              </TittleSingleContainer>{" "}
              <DotsList>
                <Dot> dla celów informacji własnych Zleceniodawcy</Dot>
                <Dot>
                  aktualnego i optymalnego sposobu użytkowania dla potrzeb
                  zabezpieczenia wierzytelności z tytułu kredytu bankowego
                </Dot>
                <Dot> transakcji kupna/sprzedaży nieruchomości</Dot>
                <Dot> transakcji leasingowych</Dot>
                <Dot> wniesienia aportu do spółki</Dot>
                <Dot> sprawozdań finansowanych oraz księgowych</Dot>
                <Dot> wyceny praw zobowiązaniowych (najem/dzierżawa)</Dot>
              </DotsList>{" "}
            </SingleDotsContainer>{" "}
            <SingleDotsContainer>
              <TittleSingleContainer>
                Sporządzamy również opracowania, takie jak:
              </TittleSingleContainer>
              <DotsList>
                <Dot>
                  {" "}
                  ekspertyzy bankowo-hipotecznej wartości nieruchomości
                </Dot>
                <Dot> audyt prawny, due dilligence nieruchomości </Dot>
                <Dot>
                  opinie o nieruchomości dla potrzeb indywidualnego inwestora
                </Dot>
                <Dot>
                  inne opracowania z zakresu rynku nieruchomości, w zależności
                  od potrzeb Klienta
                </Dot>{" "}
              </DotsList>{" "}
            </SingleDotsContainer>
            <SingleDotsContainer>
              <TittleSingleContainer>
                Nasze zalety to m.in.:
              </TittleSingleContainer>
              <DotsList>
                <Dot> niezawodność i terminowa realizacja zleceń </Dot>
                <Dot> rzetelność, profesjonalizm i uczciwość </Dot>
                <Dot> doświadczenie i stałe podnoszenie kwalifikacji </Dot>
                <Dot> wysokie standardy etyki zawodowej </Dot>
                <Dot>
                  wysoki poziom edytorski, estetyka i przejrzystość opracowań{" "}
                </Dot>
              </DotsList>{" "}
            </SingleDotsContainer>
          </LargeDotsContainer>
        </Wrapper>
      </>
    );
  }
}

export default TextNierucho;
