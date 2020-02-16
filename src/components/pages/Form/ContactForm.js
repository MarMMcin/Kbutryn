import React, { Component } from "react";
import {
  ContactSection,
  FormTittle,
  BorderUnderTittle,
  ContactForm,
  ContactInput,
  SendButton,
  FormTextarea
} from "./ContactForm.styled";

class Form extends Component {
  state = {
    name: "",
    email: "",
    messgae: "",
    phone: "",
    emailStatus: ""
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  submitForm = e => {
    const { name, email, message, phone } = this.state;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      this.setState({
        emailStatus: xhr.responseText
      });
    });

    xhr.open(
      "GET",
      "http://api.ruvictor.com/sendemail/index.php?sendto=" +
        email +
        "&name=" +
        name +
        "&message=" +
        message +
        "&phone=" +
        phone
    );

    xhr.send();

    this.setState({
      name: "",
      email: "",
      messgae: "",
      phone: ""
    });
    e.preventDefault();
  };
  render() {
    const { name, email, phone, messgae } = this.state;
    return (
      <ContactSection>
        <FormTittle>Napisz do nas</FormTittle>
        <BorderUnderTittle></BorderUnderTittle>
        <ContactForm onSubmit={this.submitForm} action="/kontakt">
          <ContactInput
            type="text"
            placeholder="Twoje imię"
            onChange={this.handleChange("name")}
            value={name}
          />
          <ContactInput
            type="email"
            placeholder="Twoj e-mail"
            onChange={this.handleChange("email")}
            value={email}
          />
          <ContactInput
            type="text"
            placeholder="Twój telefon"
            onChange={this.handleChange("phone")}
            value={phone}
          />
          <FormTextarea
            placeholder="Twoja wiadomość"
            onChange={this.handleChange("messgae")}
            value={messgae}
          ></FormTextarea>
          <SendButton type="submit" className="contact-form-btn" value="Send" />
        </ContactForm>
      </ContactSection>
    );
  }
}

export default Form;
