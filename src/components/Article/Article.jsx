import React from "react";
import "./article.css";

const Article = ({ image, title, date }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={image} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p>
          <a href="##">Read Full Article</a>
        </p>
      </div>
    </div>
  );
};

export default Article;
