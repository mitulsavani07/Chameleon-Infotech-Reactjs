import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const Article = () => {
  const { slug } = useParams();
  const article = blogPosts.find(post => post.slug === slug);

  if (!article) return <p>Article not found.</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p><em>By {article.author} on {article.date}</em></p>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;