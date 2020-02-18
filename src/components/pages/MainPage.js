import React, { Component } from "react";
import { MenuContainer } from "./styles";
import Krk1 from "../../images/Krk1.jpg";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <>
        {" "}
        <MenuContainer>
          {" "}
          <Link to="/ofirmie">
            <div className="container">
              <h2 className="text1">KBUTRYN</h2>
              <h1 className="text2">wycena, nieruchomości, geodezja</h1>
            </div>{" "}
          </Link>
          <div className="bg"></div> <img src={Krk1} alt="Krk1" />{" "}
          <div className="content">
            <h1>Krszytof Butryn Wycena nieruchomości geodezja kraków </h1>
            <h2>
              {" "}
              Wycenę (szacowanie) nieruchomości sporządzamy na zlecenie osób
              fizycznych, osób prawnych, jednostek samorządu terytorialnego,
              urzędów skarbowych oraz instytucji finansowych, w tym banków.
              Wykonywane przez nas wyceny nieruchomości spełniają wszelkie
              wymogi stawiane przez obowiązujące przepisy prawa, a także
              formalne, wynikające z dobrej praktyki i&nbsp;standardów
              zawodowych. Nasze opracowania charakteryzują się również estetyką
              i&nbsp;przejrzystością. Nasze wyceny każdorazowo poprzedzone są
              wnikliwą analizą finansowo-ekonomiczną i&nbsp;prawną przedmiotu
              wyceny, bieżącą analizą rynku, wizją lokalną, oceną stanu
              techniczno-użytkowego obiektu wycenianego, szczegółową
              dokumentacją fotograficzną oraz, w razie potrzeby, niezbędnymi
              pomiarami inwentaryzacyjnymi. nieruchomości gruntowe niezabudowane
              (m.in. działki budowlane, komercyjne, rolne) nieruchomości
              gruntowe zabudowane (np. budynkami mieszkalnymi jednorodzinnymi)
              obiekty handlowo-usługowe i przemysłowe, hale, magazyny
              nieruchomości lokalowe – lokale mieszkalne, handlowe i usługowe
              ograniczone prawa rzeczowe: spółdzielcze własnościowe prawo do
              lokalu, służebność gruntowa, służebność osobista, służebności
              przesyłu inne prawa związane z nieruchomościami maszyny i
              urządzenia trwale związane z nieruchomością Dla jakich celów
              sporządzamy opracowania: dla celów informacji własnych
              Zleceniodawcy aktualnego i optymalnego sposobu użytkowania dla
              potrzeb zabezpieczenia wierzytelności z tytułu kredytu bankowego
              transakcji kupna/sprzedaży nieruchomości transakcji leasingowych
              wniesienia aportu do spółki sprawozdań finansowanych oraz
              księgowych wyceny praw zobowiązaniowych
              (najem/dzierżawa)Sporządzamy również opracowania, takie jak:
              ekspertyzy bankowo-hipotecznej wartości nieruchomości audyt
              prawny, due dilligence nieruchomości opinie o nieruchomości dla
              potrzeb indywidualnego inwestora inne opracowania z zakresu rynku
              nieruchomości, w zależności od potrzeb Klienta Nasze zalety to
              m.in.: niezawodność i terminowa realizacja zleceń rzetelność,
              profesjonalizm i uczciwość doświadczenie i stałe podnoszenie
              kwalifikacji wysokie standardy etyki zawodowej wysoki poziom
              edytorski, estetyka i przejrzystość opracowań Współpracujemy z
              uprawnionymi geodetami działającymi na terenie miasta Krakowa oraz
              pobliskich powiatów województwa małopolskiego. Dzięki temu możemy
              zaoferować Państwu pełen zakres prac geodezyjnych, obejmujących
              m.in.: mapy do celów projektowych tyczenia budynku, budowli lub
              elementów sieci uzbrojenia terenu inwentaryzacje powykonawcze
              budynku, budowli lub uzbrojenia terenu wyznaczenie lub wznowienie
              punktów granicznych • podział nieruchomości (działki)
              inwentaryzacje architektoniczno-budowlane oraz inne pomiary
              inwentaryzacyjne mapy co celów prawnych wykazy synchronizacyjne i
              badanie ksiąg wieczystych projekty służebności gruntowych OBMIAR I
              OBLICZANIE POWIERZCHNI UŻYTKOWEJ Określanie pola powierzchni
              użytkowej budynków i lokali jest procesem istotnym, przede
              wszystkim ze względu na szeroki zakres wykorzystania tej
              informacji. Stanowi ono przede wszystkich podstawę opodatkowania
              budynków i lokali, jest też najczęściej stosowanym przelicznikiem
              wartości nieruchomości gruntowych zabudowanych oraz nieruchomości
              lokalowych. Jednocześnie obowiązujące uregulowania prawne
              dotyczące powierzchni użytkowej pozostają niespójne i
              nieprecyzyjne, a ich interpretacja – kłopotliwa. Nasza firma
              oferuje Państwu m.in.: wykonanie obmiaru powierzchni użytkowej
              budynku/lokalu zgodnie z odpowiednią Normą sporządzenie
              dokumentacji inwentaryzacyjnej AUDYT NIERUCHOMOŚCI Zakup
              nieruchomości, zwłaszcza dla potrzeb zaspokojenia własnych potrzeb
              mieszkaniowych, jest zwykle jedną z najważniejszych decyzji w
              życiu, a na pewno jest decyzją o bardzo poważnych konsekwencjach
              finansowych. Dlatego też proces kupna warto poprzedzić szczegółową
              analizą przedmiotowej nieruchomości, która może (w zależności od
              rodzaju nieruchomości) obejmować m.in.: badanie stanu prawnego
              nieruchomości analizę nieruchomości w aspekcie wskazania
              ewentualnych wad prawnych weryfikację stanu techniczno-użytkowego
              nieruchomości analizę uwarunkowań planistycznych weryfikację
              wydanej dla przedmiotowej nieruchomości dokumentacji (różnego
              typu) inwentaryzację nieruchomości oraz obmiar powierzchni
              użytkowej budynku/lokalu analizę lokalnego rynku nieruchomości
              podobnych Nasza firma oferuje Państwu usługi z zakresu
              kompleksowej oceny nieruchomości oraz wskazania obszarów ryzyk
              związanych z nieruchomością, a w szczególności rzetelną i
              profesjonalną wycenę nieruchomości.
            </h2>
          </div>
        </MenuContainer>{" "}
      </>
    );
  }
}

export default MainPage;
