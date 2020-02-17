import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  outline: none;
  img {
    width: 20vw;
    min-width: 300px;
    height: auto;
    padding: 20px;
    margin-left: 2vw;

    @media (max-width: 800px) {
      width: 80vw;
      margin-left: 0;
      min-width: 0;
    }
  }
`;

export const BoldText = styled.p`
  font-weight: 600;
`;
export const TextInContainer = styled.div`
  margin: 2vh auto;
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
export const TextContainer = styled.div``;
export const Wrapper = styled.div`
  padding: 2vh 20vw;
  color: #444;
  text-align: justify;
  white-space: pre-line;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
    padding-right: 10vw;
    padding-left: 10vw;
  }
`;
