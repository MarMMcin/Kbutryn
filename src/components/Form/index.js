import React, { Component } from "react";
import Form from "../ContactForm";
import {
  Container,
  HeaderSection,
  HeaderSectionInformation,
  AdressSection,
  LinkTo,
  InsideText,
  PhoneSection,
  EmailSection,
  BottomSection,
  BottomSectionInformation
} from "./styles";

class ContactText extends Component {
  render() {
    return (
      <>
        <Container>
          <HeaderSection>
            <HeaderSectionInformation>
              KBUTRYN wycena, nieruchomości, geodezja
            </HeaderSectionInformation>{" "}
            <HeaderSectionInformation>
              Biuro Wycen Nieruchomości – mgr inż. Krzysztof Butryn
            </HeaderSectionInformation>
          </HeaderSection>
          <AdressSection>
            <LinkTo
              href="https://www.google.pl/maps/place/Na+Barciach+14,+31-422+Kraków/@50.0915093,19.9598724,17z/data=!3m1!4b1!4m5!3m4!1s0x47165aed988a8e7f:0xac2c4c702ba49895!8m2!3d50.0915093!4d19.9620611"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-home"></i>
              <InsideText>ul. Na Barciach 14</InsideText>
              <InsideText> 31-423 Kraków</InsideText>
              <InsideText>REGON: 385438011</InsideText>
              <InsideText>NIP: 9452233718</InsideText>
            </LinkTo>
          </AdressSection>
          <PhoneSection>
            <LinkTo href="tel:+48728559719">
              <i className="fas fa-mobile-alt"></i>
              <InsideText>Telefon: 728-559-719</InsideText>
            </LinkTo>
          </PhoneSection>
          <EmailSection>
            <LinkTo href="mailto:wycena.kbutryn@gmail.com">
              <InsideText>
                <i className="fas fa-envelope-open"></i>
              </InsideText>
              <InsideText>E-mail: wycena.kbutryn@gmail.com</InsideText>
            </LinkTo>
          </EmailSection>
          <BottomSection>
            <BottomSectionInformation>
              Ceny usług ustalane są indywidualnie w zależności od rodzaju
              nieruchomości, celu i zakresu wyceny, stopnia skomplikowania
              zlecenia oraz lokalizacji nieruchomości.
            </BottomSectionInformation>

            <BottomSectionInformation>
              Zapraszamy do bezpośredniego kontaktu telefonicznego w celu
              konsultacji zakresu zlecenia oraz uzyskania bezpłatnej wyceny.
            </BottomSectionInformation>

            <BottomSectionInformation>
              Zachęcamy także do skorzystania z formularza kontaktowego, aby
              wysłać zapytanie ofertowe lub zapytać o więcej informacji.
            </BottomSectionInformation>
          </BottomSection>
        </Container>{" "}
        <Form></Form>
      </>
    );
  }
}

export default ContactText;
