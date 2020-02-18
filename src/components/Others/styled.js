import styled from "styled-components";
export const Wrapper = styled.div`
  overflow: auto;
  color: #444;
  padding-left: 8vw;
  padding-right: 8vw;
`;
export const GridContainer = styled.div`
  margin: 2vh;
  display: grid;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const LeftMainBlock = styled.div`
  padding-right: 5vw;
  grid-area: 1 / 1 / 2 / 2;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const RightMainBlock = styled.div`
  padding-left: 5vw;
  grid-area: 1 / 2 / 2 / 3;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const SmallHeader = styled.h2``;
export const Header = styled.h1`
  font-size: 18px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding-left: 0;
  letter-spacing: 0px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const DotsList = styled.ul``;
export const TextInBlocks = styled.div`
  padding-top: 20px;
  text-align: justify;
  font-size: 16px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const Dot = styled.li`
  list-style: none;
  font-size: 14px;
  margin: 5px;
  :before {
    font-weight: 700;
    content: "• ";
    color: #ec7801;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const ContactBlock = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  margin-top: 30px;
  text-align: center;
  padding: 0 15vw 0 15vw;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0 5vw 0 5vw;
  }
`;
export const ContactButton = styled.button`
  outline: none;
  border: 1px solid #ec7801;
  background: none;
  padding: 2px 3px;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  color: #ec7801;
  :hover {
    color: #fff;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #ec7801;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  :hover::before {
    height: 200%;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
