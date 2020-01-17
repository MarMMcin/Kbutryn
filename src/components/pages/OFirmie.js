import React, { Component } from "react";

import styled from "styled-components";

import nieruchomosc from "../../images/Krk1.jpg";
import nieruchomosc2 from "../../images/Krk2.jpg";
import TextOFirmie from "./TextPages/TextOFirmie";

const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
 

  .logo {  
    position: relative;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 20vh;
    background-image: url(${nieruchomosc});
    background-size: cover;
    background-attachment: fixed;
    background-position:center;

    z-index: -1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .logo:before {
    content: "";    
  position: absolute;

    width: 100vw;
    height: 20vh;
    background-color: black;
    opacity: 0.3;
    z-index: -2;
  }

  .logo:after {
    content: "";
    position: absolute;
    right: 0;
    background-image: url(${nieruchomosc2});
    width: 100vw;
    height: 20vh;
    background-size: cover;
    z-index: -5;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-attachment: fixed;
    animation: 12s banner linear infinite;
  }
  h1 {
    position: relative;
    left: 0;
    color: black;
    letter-spacing: 4px;
    width: 100vw;
    font-size:25px;
    background-color: white
    text-align: center;
    opacity: 0.8;

  }
  @keyframes banner {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    30% {
      opacity: 0.5;
    }
    40% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    80% {
      opacity: 0.5;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @media (max-width: 768px) {

.logo {
  margin-top: -2vh;
}
  }
`;

class Nieruchomosci extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          <div className="logo">
            <h1>O Firmie</h1>
          </div>
          <TextOFirmie></TextOFirmie>
        </Container>
      </>
    );
  }
}

export default Nieruchomosci;
