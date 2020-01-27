import { StyledP } from "./TextArtykuly.styled";
import Geodezja3 from "../../../images/geodezja3.png";
import icon from "../../../images/urban.svg";
import foto1 from "../../../images/artykul1.jpg";
import foto2 from "../../../images/artykul2.jpg";
import foto3 from "../../../images/artykul3.jpg";
import foto4 from "../../../images/artykul4.jpg";
import foto5 from "../../../images/artykul5.jpg";
import foto6 from "../../../images/artykul6.jpg";
import foto7 from "../../../images/artykul7.jpg";
import foto8 from "../../../images/artykul8.jpg";
import foto9 from "../../../images/artykul9.jpg";
import foto10 from "../../../images/artykul10.jpg";
import GB from "../../../images/gbflag.svg";
import PL from "../../../images/PL.svg";

const articles = [
  {
    id: "0001",
    id2: "2001",
    photo: foto1,
    language: GB,
    tittle:
      "Analysis of the Impact of Quantitative and Qualitative Price-setting Attributes on a Market of Real Estate Intended for the Purpose of the Transformer Stations on the Example of Krakow",
    authors: "Autorzy: Krzysztof BUTRYN, Edward PREWEDA"
  },
  {
    id: "0002",
    id2: "2002",
    photo: foto2,
    language: GB,
    tittle:
      "An analysis of arrangements of the local spatial management plans in the context of determining coverage of transmission easements – the example of the city of Krakow",
    authors: "Autor: Krzysztof BUTRYN"
  },
  {
    id: "0003",
    id2: "2003",
    photo: foto3,
    language: GB,
    tittle:
      "North beltway of Cracow - selected elements of impact on the environment and the real estate market",
    authors: "Autorzy: BUTRYN Krzysztof, JASIŃSKA Elżbieta, PREWEDA Edward"
  },
  {
    id: "0004",
    id2: "2004",
    photo: foto4,
    language: PL,
    tittle:
      "Określanie wartości nieruchomości pozostawionych poza obecnymi granicami Rzeczypospolitej Polskiej",
    authors: "Autorzy: Krzysztof BUTRYN, Elżbieta JASIŃSKA"
  },
  {
    id: "0005",
    id2: "200",
    photo: foto5,
    language: PL,
    tittle:
      "Praktyczne aspekty ustalania powierzchni użytkowej budynków i lokali do różnych celów",
    authors: "Autorzy: Krzysztof BUTRYN, Elżbieta JASIŃSKA"
  }
];
export default { articles };
{
  /* <div className="div1">
<img src={foto1} alt="" />
<img src={GB} alt="" className="flag" />
<p className="text">
  Analysis of the Impact of Quantitative and Qualitative
  Price-setting Attributes on a Market of Real Estate Intended
  for the Purpose of the Transformer Stations on the Example of
  Krakow{" "}
</p>
<p
  className="
authors"
>
  Autorzy: Krzysztof BUTRYN, Edward PREWEDA
</p>
</div>{" "} */
}
