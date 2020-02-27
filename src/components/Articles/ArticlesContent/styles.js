import styled from "styled-components";
export const SingleArticleContainer = styled.div`
  width: 602px;
  height: 275px;
  flex-direction: row;
  margin: 20px;
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 280px;
    height: 230px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  img {
  }
`;
export const LinkToArticle = styled.a`
  position: relative;
`;
export const ContainerImage = styled.img`
  width: 600px;
  height: 125px;
  object-fit: cover;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    width: 278px;
    height: 100px;
    margin: 0px;
  }
`;

export const FlagImg = styled.img`
  position: absolute;
  z-index: 10000;
  top: 2%;
  left: 2%;
  width: 60px;
  height: auto;
  opacity: 0.5;
  border: 1px solid black;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  height: 144px;
  @media (max-width: 768px) {
    height: 140px;
  }
`;
export const ArticleTittle = styled.p`
  text-align: justify;
  padding: 0 20px 0 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ArticleAuthos = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px 20px 0 20px;
  font-weight: 600;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
