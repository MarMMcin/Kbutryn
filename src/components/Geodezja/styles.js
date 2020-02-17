import styled from "styled-components";
export const Dot = styled.li`
  padding-left: 1em;
  text-indent: -0.7em;
  list-style: none;
  margin: 5px;
  ::before {
    font-weight: 700;
    content: "• ";
    color: #ec7801;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const SecondTextContainer = styled.div``;
export const Image = styled.img`
  height: 35vh;
  padding: 20px;
  opacity: 0.1;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
  }
`;
export const LiDots = styled.ul`
  margin-top: 1vh;
  font-size: 14px;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const SecondText = styled.span`
  font-size: 16px;
  border-bottom: 1px solid #ec7801;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const BoldTiitle = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1vh;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 2vh;
  padding-left: 8vw;
  padding-right: 8vw;
`;
