import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map(post => (
        <div key={post.id}>
          <h2>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>By {post.author} on {post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;