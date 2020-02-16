import React, { Component } from "react";
import shortid from "shortid";

import articles from "./ArtykulyContent";

class ArtComponent extends Component {
  render() {
    return articles.articles.map(article => (
      <nav className="mainDiv" key={shortid.generate()}>
        <div className="div1">
          <a target="_blank" rel="noopener noreferrer" href={article.pdf}>
            <img src={article.photo} alt="" className="photo" />{" "}
          </a>
          <img src={article.language} alt="" className="flag" />

          <p className="text">{article.tittle} </p>

          <p
            className="
authors"
          >
            {article.authors}
          </p>
        </div>
      </nav>
    ));
  }
}

export default ArtComponent;
