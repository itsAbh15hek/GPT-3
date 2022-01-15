import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            image={blog01}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 21"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            image={blog02}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 21"
          />
          <Article
            image={blog03}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 21"
          />
          <Article
            image={blog04}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 21"
          />
          <Article
            image={blog05}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 21"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
