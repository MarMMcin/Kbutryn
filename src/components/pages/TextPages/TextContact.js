import React, { Component } from "react";
import Form from "./ContactForm";
import { StyledP } from "./TextContact.styled";

class TextContact extends Component {
  render() {
    return (
      <>
        <StyledP>
          <div className="container">
            <div className="div1">
              <p>KBUTRYN wycena, nieruchomości, geodezja</p>{" "}
              <p>Biuro Wycen Nieruchomości – mgr inż. Krzysztof Butryn</p>
            </div>
            <div className="div2">
              <a
                href="https://www.google.pl/maps/place/Na+Barciach+14,+31-422+Kraków/@50.0915093,19.9598724,17z/data=!3m1!4b1!4m5!3m4!1s0x47165aed988a8e7f:0xac2c4c702ba49895!8m2!3d50.0915093!4d19.9620611"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fas fa-home"></i>
                <p>ul. Na Barciach 14</p>
                <p> 31-423 Kraków</p> <p>REGON: 385438011</p>
                <p>NIP: 9452233718</p>
              </a>
            </div>
            <div className="div3">
              <a href="tel:+48728559719">
                {" "}
                <i className="fas fa-mobile-alt"></i>
                <p>Telefon: 728-559-719</p>
              </a>
            </div>
            <div className="div4">
              <a href="mailto:wycena.kbutryn@gmail.com">
                {" "}
                <p>
                  <i className="fas fa-envelope-open"></i>
                </p>
                <p>E-mail: wycena.kbutryn@gmail.com</p>
              </a>
            </div>
            <div className="div5">
              <p>
                Ceny usług ustalane są indywidualnie w zależności od rodzaju
                nieruchomości, celu i zakresu wyceny, stopnia skomplikowania
                zlecenia oraz lokalizacji nieruchomości.
              </p>

              <p>
                Zapraszamy do bezpośredniego kontaktu telefonicznego w celu
                konsultacji zakresu zlecenia oraz uzyskania bezpłatnej wyceny.
              </p>

              <p>
                Zachęcamy także do skorzystania z formularza kontaktowego, aby
                wysłać zapytanie ofertowe lub zapytać o więcej informacji.
              </p>
            </div>
          </div>{" "}
          <Form></Form>
        </StyledP>
      </>
    );
  }
}

export default TextContact;
