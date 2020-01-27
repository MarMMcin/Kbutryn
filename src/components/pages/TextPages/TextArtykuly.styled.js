import styled from "styled-components";

import icon from "../../../images/urban.svg";
import bg from "./bg.jpg";
export const StyledP = styled.span`
  display: flex;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-left: 15vw;
    padding-right: 15vw;
  }
  .tittle,
  .tittle a {
    margin-top: 2vh;
    font-weight: 600;
    color: inherit;
    text-decoration: none;
  }
  .content {
    display: flex;
    flex-direction: row;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .content div {
    width: 602px;
    height: 275px;
    flex-direction: row;
    margin: 20px;
    border: 1px solid black;
    cursor: pointer;
  }
  .text {
    padding: 20px;
    text-align: justify;
  }
  .authors {
    padding-top: 20px;
    padding-left: 20px;
    text-align: justify;
    font-weight: 600;
  }

  img {
    width: 600px;
    height: 125px;
    object-fit: cover;
    border-bottom: 1px SOLID black;
  }

  span p {
    font-weight: 600;
    padding-bottom: 10px;
  }
  .div1 {
    position: relative;
  }

  .flag {
    position: absolute;
    top: 2%;
    left: 2%;
    width: 60px;
    height: auto;
    opacity: 0.5;
    border: 1px solid black;
  }

  .photo:hover {
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    .container {
      padding-left: 0vw;
      padding-right: 0vw;
    }
    .content div {
      width: 280px;
      height: 300px;
    }
    img {
      width: 278px;
      height: 100px;
      margin: 0px;
    }
    .text {
      font-size: 12px;
    }
  }
`;
