import React, { Component } from "react";
import shortid from "shortid";
import {
  SingleArticleContainer,
  Wrapper,
  LinkToArticle,
  ContainerImage,
  FlagImg,
  ArticleTittle,
  ArticleAuthos,
  TextContainer
} from "./styles";
import articles from "./ArtykulyContent";

class ArtComponent extends Component {
  render() {
    return articles.articles.map(article => (
      <SingleArticleContainer className="mainDiv" key={shortid.generate()}>
        <Wrapper>
          <LinkToArticle
            target="_blank"
            rel="noopener noreferrer"
            href={article.pdf}
          >
            <ContainerImage src={article.photo} alt="" className="photo" />{" "}
          </LinkToArticle>{" "}
          <FlagImg src={article.language} alt="" className="flag" />
          <TextContainer>
            <ArticleTittle>{article.tittle} </ArticleTittle>
            <ArticleAuthos>{article.authors}</ArticleAuthos>{" "}
          </TextContainer>
        </Wrapper>
      </SingleArticleContainer>
    ));
  }
}

export default ArtComponent;
