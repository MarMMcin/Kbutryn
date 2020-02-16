import styled from "styled-components";
import bg from "../../../images/bg.jpg";

export const StyledP = styled.span``;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  font-size: 14px;
  i {
    font-size: 48px;
    color: #ec7801;
    padding-bottom: 1vh;
    transition: All 0.2s ease-in-out;
    cursor: pointer;
  }
  i:hover {
    transform: scale(1.5);
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const HeaderSection = styled.div`
  padding-top: 3vh;
  grid-area: 1 / 1 / 2 / 4;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    padding-bottom: 2vh;
  }
`;

export const HeaderSectionInformation = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  @media (max-width: 768px) {
    padding-bottom: 2vh;
    font-size: 0.8rem;
  }
`;
export const AdressSection = styled.div`
  margin-left: 25vw;
  grid-area: 2 / 1 / 3 / 2;
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 2vh;
    margin: 0;
  }
`;
export const LinkTo = styled.a`
  text-decoration: none;
  color: black;
`;
export const InsideText = styled.p``;
export const PhoneSection = styled.div`
  padding-left: 0vw;
  grid-area: 2 / 2 / 3 / 3;
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 2vh;
    margin: 0;
  }
`;
export const EmailSection = styled.div`
  margin-right: 25vw;
  grid-area: 2 / 3 / 3 / 4;
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 2vh;
    margin: 0;
  }
`;
export const BottomSection = styled.div`
  font-size: 1rem;
  text-align: center;
  grid-area: 3 / 1 / 4 / 4;
  padding: 2vh 25vw 2vh 25vw;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const BottomSectionInformation = styled.p`
  font-size: 0.9rem;
`;
