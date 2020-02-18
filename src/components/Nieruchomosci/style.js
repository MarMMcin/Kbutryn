import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  color: #444;
  padding: 2vh 20vw 0 20vw;
  padding-top: 2vh;
  overflow-x: hidden !important;

  @media (max-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;
export const TextInInfo = styled.p`
  font-size: 16px;
  padding-bottom: 13px;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const LargeDotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  padding-bottom: 2vh;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
export const SingleDotsContainer = styled.div`
  width: 30vw;
  padding-top: 40px;
  font-size: 14px;
  padding-top: 20px;

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 40vw;
    font-size: 12px;
  }
`;
export const TittleSingleContainer = styled.span`
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ec7801;
  @media (max-width: 768px) {
  }
`;
export const DotsList = styled.ul`
  list-style: none;
  margin: 5px;
  padding: 0 30px 20px 30px;
  overflow: hidden !important;

  @media (max-width: 768px) {
    padding: 0 0 20px 0;
  }
`;

export const Dot = styled.li`
  padding-left: 1em;
  text-indent: -0.7em;
  :before {
    font-weight: 700;
    content: "• ";
    color: #ec7801;
  }
`;
