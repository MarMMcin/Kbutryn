import styled from "styled-components";
export const Container = styled.div`
  position: relative;

  @media (max-width: 768px) {
  }
`;

export const Tiitle = styled.div`
  position: relative;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  align-content: center;
  padding: 0 15vw 0 15vw;
  margin: 1vh 0 1vh 0;
`;
export const LinkToPublications = styled.a`
  position: relative;
  color: inherit;
  text-align: center;

  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ArticlesContainer = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: row;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
