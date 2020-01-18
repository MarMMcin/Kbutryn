import React, { Component } from "react";
import styled from "styled-components";
import Krk1 from "../../images/Krk1.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`

  position: relative;
  z-index: 1;
  display: flex;  
  height: 90vh;
  .link{
 
  }
  .bg {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top:0;
    left:0
    width: 100vw;
    height: 90vh;
    z-index: -3;
   
  }

  img { 
    
    position: relative;
    top:0;
    left:0;
    z-index: -4; 
    object-fit: cover;
    width: 100vw;
    height: 90vh;

  }
  .container {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;  z-index: -1;

  }
  .container span {
    
    display: block;
  }
  .text1 {
    color: black;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 8px;
    margin-bottom: 20px;
    background: white;
    opacity: 0.5;
  
    position: relative;
    animation: text 3s 1;
  }
  .text2 {
    font-size: 30px;
    color: #ec7801;
  }

  @keyframes text {
    0% {
      color: black;
      opacity: 1;
      margin-bottom: -40px;
    }
    30% {
      letter-spacing: 25px;
      margin-bottom: -40px;
      opacity: 1;
      
    }
    85% {
      letter-spacing: 8px;
      margin-bottom: -40px;
      opacity: 1;
    }

    100% {
   
    }
  }
  @media (max-width: 768px) 
  
  {
    img,.bg{
      
      height: 100vh;
  }

  .text1{
    font-size: 40px;
  }  .text2{
    font-size: 15px;
  }}
  @media (max-width: 768px) {
  overflow: hidden;
  height: 100vh;
  }


 `;

class MainPage extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          {" "}
          <Link to="/ofirmie">
            <div className="container">
              <span className="text1">KBUTRYN</span>
              <span className="text2">wycena, nieruchomości, geodezja</span>
            </div>{" "}
          </Link>
          <div className="bg"></div> <img src={Krk1} alt="" />{" "}
        </Container>{" "}
      </>
    );
  }
}

export default MainPage;
