import React from 'react'
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const BlogPost = () => {
  return (
    <div className='container my-16 md:my-32 relative'>
      <h2 className='text-5xl text-center font-bold leading-tight'>Tech Trends & <br />
      IT Solutions Blog</h2>
      {blogPosts.map(post => (
        <div key={post.id}>
          <h4>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h4>
          <p>By {post.author} on {post.date}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogPost