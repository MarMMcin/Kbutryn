import React, { Component } from "react";

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
              <i className="fas fa-home"></i>
              <p>ul. Na Barciach 14</p>
              <p> 31-423 Kraków</p> <p>REGON: 302618717</p>
              <p>NIP: 6681930127</p>
            </div>
            <div className="div3">
              <i className="fas fa-mobile-alt"></i>
              <p>Telefon: 728-559-719</p>
            </div>
            <div className="div4">
              <p>
                <i className="fas fa-envelope-open"></i>
              </p>

              <p>E-mail: wycena.kbutryn@gmail.com</p>
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
          <div className="contact-section">
            <h1>Napisz do nas</h1>
            <div className="border"></div>
            <form className="contact-form" action="/#/kontakt">
              <input
                type="text"
                className="contact-form-text"
                placeholder="Twoje imię"
              />
              <input
                type="email"
                className="contact-form-text"
                placeholder="Twoj e-mail"
              />
              <input
                type="text"
                className="contact-form-text"
                placeholder="Twój telefon"
              />
              <textarea
                className="contact-form-text"
                placeholder="Twoja wiadomość"
              ></textarea>
              <input type="submit" className="contact-form-btn" value="Send" />
            </form>
          </div>
        </StyledP>
      </>
    );
  }
}

export default TextContact;
