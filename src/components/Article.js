import React from "react";
import mountain from "../img/mountain.png";

const Article = () => {
  return (
    <div>
      <article className="article">
        <a href="/">
          <img src={mountain} alt="" />
        </a>
        <div className="article_content">
          <a href="/" className="article_name">
            Lorem ipsum dolor sit amet coetur adipisicing elit.
          </a>
          <div className="time_ago">Updated 30m ago</div>
          <div className="more_articles">
            <a href="/">
              Lorem ipsum dolor sit amet Lorem, ipsum consectetur adipisicing
              elit.
            </a>
            <a href="/">
              Lorem ipsum dolor sit amet consectetur Lorem, ipsum adipisicing
              elit.
            </a>
            <a href="/">
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
              elit.
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
