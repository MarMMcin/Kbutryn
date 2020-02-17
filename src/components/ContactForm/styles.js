import styled from "styled-components";
import bg from "../../images/bg.jpg";

export const ContactSection = styled.div`
  background: black url(${bg}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  padding: 40px 0;
  position: relative;
  z-index: 1;
`;
export const FormTittle = styled.h1`
  text-align: center;
  color: #ec7801;
  z-index: -1;
`;
export const BorderUnderTittle = styled.div`
  width: 200px;
  height: 10px;
  background: #ec7801;
  margin: 40px auto;
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: auto;
  padding: 0 10px;
  overflow: hidden;
`;

export const ContactInput = styled.input`
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
  :focus {
    box-shadow: 0 0 10px 4px #ec7801;
  }
`;
export const SendButton = styled.input`
  margin: auto;
  padding: 0 10px;
  float: right;
  border: 0;
  background: #ec7801;
  color: #fff;
  padding: 12px 50px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background: #b95e01;
  }
`;
export const FormTextarea = styled.textarea`
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
  resize: none;
  height: 120px;
  :focus {
    box-shadow: 0 0 10px 4px #ec7801;
`;
