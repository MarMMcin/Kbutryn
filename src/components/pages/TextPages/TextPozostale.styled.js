import styled from "styled-components";

export const StyledP = styled.span`
  overflow: auto;

  color: #444;

  padding-left: 8vw;
  padding-right: 8vw;

  .container {
    margin: 2vh;
    display: grid;
  }
  .buttons {
    display: inline;
    text-align: justify;
  }
  h2,
  h3 {
    font-size: 2vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding-left: 0;
    letter-spacing: 0px;
    font-weight: 600;
  }
  h2 {
  }
  .div1 {
    padding-right: 5vw;
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    padding-left: 5vw;
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    text-align: center;
    grid-area: 2 / 1 / 3 / 3;
    padding-left: 15vw;
    padding-right: 15vw;
    font-size: 2vh;
  }
  .contactext {
    font-weight: 600;
    margin-top: 20px;
    padding: 10px;
  }
  .info {
    padding-top: 20px;
    text-align: justify;
  }
  .info,
  .line {
    font-size: 1.8vh;
  }
  .dots {
    font-size: 1.6vh;
  }
  .btn {
    outline: none;
    border: 1px solid #ec7801;
    background: none;
    padding: 2px 3px;
    font-size: 16px;
    font-size: 2vh;
    cursor: pointer;
    margin: 10px;
    transition: 0.8s;
    position: relative;
    overflow: hidden;
  }
  .btn1,
  .btn2 {
    font-size: 2vh;
    color: #ec7801;
  }

  .btn1:hover,
  .btn2:hover {
    color: #fff;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #ec7801;
    z-index: -1;
    transition: 0.8s;
  }
  .btn1::before {
    top: 0;
    border-radius: 0 0 50% 50%;
  }

  .btn1:hover::before {
    height: 180%;
  }

  i {
    font-weight: 600;
  }
  .buttontext {
    font-weight: 600;
    position: relative;
  }
  .buttonheader {
    font-weight: 9px;
    position: relative;
  }
  .undertext {
    margin-top: 2vh;
    margin-bottom: 1vh;
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
    }
    .div3 {
      padding: 2vh;
    }
    .div1,
    .div2 {
      padding-left: 0;
      padding-right: 0;
    }
    .div2 {
      margin-top: 40px;
    }
  }
`;
