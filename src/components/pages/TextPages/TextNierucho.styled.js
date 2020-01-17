import styled from "styled-components";

export const StyledP = styled.span`
  margin-top: 20px;

  color: #444;
  padding-left: 20vw;
  padding-right: 20vw;
  padding-top: 2vh;
  overflow-x: hidden !important;

  .kropki {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    padding-bottom: 2vh;
  }
  .container {
    width: 30vw;
    padding-top: 40px;
    font-size: 11px;
    padding-top: 20px;
  }
  .tittle {
    font-size: 1.4vh;
    padding-bottom: 20px;
    text-align: justify;
  }
  .two {
    text-align: center;
  }
  .line {
    font-weight: 600;
    color: #333;
    border-bottom: 1px solid #ec7801;
  }
  .dots {
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    overflow: hidden !important;
  }
  .dots p {
    margin: 5px;
  }
  @media (max-width: 768px) {
    .info {
      padding-left: 0vw;
      padding-right: 0vw;
    }
    .container {
      width: 50vw;
    }
    .dots {
      padding-bottom: 20px;
      padding-left: 0;
      padding-right: 0;
    }
    .line {
      padding-left: 0vw;
      padding-right: 0vw;
    }
  }
`;
