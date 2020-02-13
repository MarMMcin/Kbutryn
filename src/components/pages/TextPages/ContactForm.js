import React, { Component } from "react";
import styled from "styled-components";
import bg from "./bg.jpg";

const ContactForm = styled.div`
  .contact-section {
    background: black url(${bg}) no-repeat center;
    background-attachment: fixed;
    background-size: cover;
    padding: 40px 0;
    position: relative;
    z-index: 1;
  }

  .contact-section h1 {
    text-align: center;
    color: #ec7801;
    z-index: -1;
  }
  .border {
    width: 200px;
    height: 10px;
    background: #ec7801;
    margin: 40px auto;
  }

  .contact-form {
    max-width: 600px;
    margin: auto;
    padding: 0 10px;
    overflow: hidden;
  }

  .contact-form-text {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0;
    border: 0;
    background: #111;
    padding: 20px 40px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
  }
  .contact-form-text:focus {
    box-shadow: 0 0 10px 4px #ec7801;
  }
  textarea.contact-form-text {
    resize: none;
    height: 120px;
  }
  .contact-form-btn {
    float: right;
    border: 0;
    background: #ec7801;
    color: #fff;
    padding: 12px 50px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s;
  }
  .contact-form-btn:hover {
    background: #b95e01;
  }
`;
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
      <ContactForm>
        <div className="contact-section">
          <h1>Napisz do nas</h1>
          <div className="border"></div>
          <form
            onSubmit={this.submitForm}
            className="contact-form"
            action="/kontakt"
          >
            <input
              type="text"
              className="contact-form-text"
              placeholder="Twoje imię"
              onChange={this.handleChange("name")}
              value={name}
            />
            <input
              type="email"
              className="contact-form-text"
              placeholder="Twoj e-mail"
              onChange={this.handleChange("email")}
              value={email}
            />
            <input
              type="text"
              className="contact-form-text"
              placeholder="Twój telefon"
              onChange={this.handleChange("phone")}
              value={phone}
            />
            <textarea
              className="contact-form-text"
              placeholder="Twoja wiadomość"
              onChange={this.handleChange("messgae")}
              value={messgae}
            ></textarea>
            <input type="submit" className="contact-form-btn" value="Send" />
          </form>
        </div>
      </ContactForm>
    );
  }
}

export default Form;
