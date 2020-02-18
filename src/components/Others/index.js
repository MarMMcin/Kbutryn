import React, { Component } from "react";
import {
  Wrapper,
  GridContainer,
  LeftMainBlock,
  RightMainBlock,
  Header,
  TextInBlocks,
  SmallHeader,
  DotsList,
  Dot,
  ContactBlock,
  ContactButton
} from "./styled";
import { Link } from "react-router-dom";
class TextNierucho extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <GridContainer>
            <LeftMainBlock>
              <Header>OBMIAR I&nbsp;OBLICZANIE POWIERZCHNI UŻYTKOWEJ</Header>
              <TextInBlocks>
                Określanie pola powierzchni użytkowej budynków i&nbsp;lokali
                jest procesem istotnym, przede wszystkim ze względu na szeroki
                zakres wykorzystania tej informacji. Stanowi ono przede
                wszystkich podstawę opodatkowania budynków i&nbsp;lokali, jest
                też najczęściej stosowanym przelicznikiem wartości nieruchomości
                gruntowych zabudowanych oraz nieruchomości lokalowych.
                Jednocześnie obowiązujące uregulowania prawne dotyczące
                powierzchni użytkowej pozostają niespójne i&nbsp;nieprecyzyjne,
                a ich interpretacja – kłopotliwa.
              </TextInBlocks>
              <SmallHeader>Nasza firma oferuje Państwu m.in.:</SmallHeader>{" "}
              <DotsList>
                <Dot>
                  wykonanie obmiaru powierzchni użytkowej budynku/lokalu zgodnie
                  z&nbsp;odpowiednią Normą
                </Dot>{" "}
                <Dot>sporządzenie dokumentacji inwentaryzacyjnej</Dot>
              </DotsList>{" "}
            </LeftMainBlock>

            <RightMainBlock>
              <Header>AUDYT NIERUCHOMOŚCI</Header>
              <TextInBlocks>
                Zakup nieruchomości, zwłaszcza dla potrzeb zaspokojenia własnych
                potrzeb mieszkaniowych, jest zwykle jedną z najważniejszych
                decyzji w życiu, a na pewno jest decyzją o bardzo poważnych
                konsekwencjach finansowych. Dlatego też proces kupna warto
                poprzedzić szczegółową analizą przedmiotowej nieruchomości,
                która może (w&nbsp;zależności od rodzaju nieruchomości)
                obejmować m.in.:
              </TextInBlocks>
              <DotsList>
                <Dot> badanie stanu prawnego nieruchomości </Dot>
                <Dot>
                  analizę nieruchomości w aspekcie wskazania ewentualnych wad
                  prawnych
                </Dot>
                <Dot>
                  {" "}
                  weryfikację stanu techniczno-użytkowego nieruchomości{" "}
                </Dot>
                <Dot> analizę uwarunkowań planistycznych </Dot>
                <Dot>
                  weryfikację wydanej dla przedmiotowej nieruchomości
                  dokumentacji (różnego typu)
                </Dot>
                <Dot>
                  inwentaryzację nieruchomości oraz obmiar powierzchni użytkowej
                  budynku/lokalu
                </Dot>
                <Dot> analizę lokalnego rynku nieruchomości podobnych</Dot>
              </DotsList>
            </RightMainBlock>
            <ContactBlock>
              Nasza firma oferuje Państwu usługi z&nbsp;zakresu kompleksowej
              oceny nieruchomości oraz wskazania obszarów ryzyk związanych
              z&nbsp;nieruchomością, a&nbsp;w&nbsp;szczególności rzetelną i
              profesjonalną wycenę nieruchomości.
              <Link to="/Kontakt">
                <ContactButton>
                  Zachęcamy do kontaktu drogą telefoniczną lub mailową celem
                  uzyskania szczegółowych informacji oraz bezpłatnej wyceny
                  kosztów zlecenia.
                </ContactButton>
              </Link>
            </ContactBlock>
          </GridContainer>
        </Wrapper>
      </>
    );
  }
}

export default TextNierucho;
