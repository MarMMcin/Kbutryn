import styled from "styled-components";
import bg from "./bg.jpg";
export const StyledP = styled.span`
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }
    i {
      font-size: 3rem;
      color: #ec7801;
      padding-bottom: 1vh;
      transition: All 0.2s ease-in-out;
      cursor: pointer;
    }
 

    i:hover {
      transform: scale(1.8);
    }
  }
  div p {
    font-size: 0.8rem
  }
  .div1 {
    padding-top: 3vh;
    grid-area: 1 / 1 / 2 / 4;
    text-align: center;

    p {
      font-size:1rem;
      font-weight: 600;
    }
  }
  .div2 {
    margin-left: 25vw;
    grid-area: 2 / 1 / 3 / 2;
    text-align: center;
  }
  .div3 {
    padding-left: 0vw;
    grid-area: 2 / 2 / 3 / 3;
    text-align: center;
  }
  .div4 {
    margin-right: 25vw;
    grid-area: 2 / 3 / 3 / 4;
    text-align: center;
  }
  .div5 {
    padding-top: 2vh;
    font-size: 1rem;
    text-align: center;
    grid-area: 3 / 1 / 4 / 4;
    padding-left: 25vw;
    padding-right: 25vw;
  }
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
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
    }

    .div2,
    .div4 {
      margin: 0;
    }
    .div1,
    .div2,
    .div3,
    .div4,
    .div5 {
      padding-bottom: 2vh;
    }
    .border {
      width: 100vw;
    }
  }
`;
