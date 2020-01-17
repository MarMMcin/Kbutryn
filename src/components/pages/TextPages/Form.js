
import React, { Component } from "react";

import { StyledP } from "./TextContact.styled";

class TextContact extends Component {
  render() {
    return (
      <>
        <StyledP>

        <div className="contact-section">
<h1>Contact Us</h1>
<div className="border"></div>
<form className="contact-form" action="index.html" method="post">

  <input type="text" className="contact-form-text" placeholder="Imię">
  <input type="email" className="contact-form-text" placeholder="e-mail email">
  <input type="text" className="contact-form-text" placeholder="telefon">
  <textarea className="contact-form-text" placeholder="Twoja wiadomość"></textarea>
  <input type="submit" className="contact-form-btn" value="Send">
</form>
</div>


        </StyledP>
      </>
    );
  }
}

export default TextContact;

