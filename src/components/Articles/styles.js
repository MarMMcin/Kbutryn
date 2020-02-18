import styled from "styled-components";
export const Container = styled.div``;
export const Wrapper = styled.span`
  display: flex;
`;

export const Tiitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0 15vw 0 15vw;
  margin: 1vh 0 1vh 0;
`;
export const LinkToPublications = styled.a`
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
  display: flex;
  flex-direction: row;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
