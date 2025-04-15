import React from 'react'
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const BlogPost = () => {
  return (
    <div className='container my-16 md:my-32 relative'>
      <h2 className='text-2xl lg:text-5xl text-center font-bold leading-tight'>Tech Trends & <br />
      IT Solutions Blog</h2>
      <div className='flex flex-wrap mt-10 md:mt-20'>
        {blogPosts.slice(0, 3).map(post => (
          <div key={post.id}  className='w-full sm:w-1/2 lg:w-1/3 p-3.5 lg:text-lg'>
            <Link to={`/blog/${post.slug}`}>
              <img src={post.image} alt={post.title} className='rounded-3xl w-full' />
              <div className='flex items-center justify-between flex-wrap mt-7'>
                <span className={`font-bold tracking-widest text-[${post.color}]`}>SHOPIFY</span>
                <p>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
              <h4 className={`font-bold leading-tight mt-2`}>
                {post.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPost