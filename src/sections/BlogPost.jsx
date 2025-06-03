import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
  const postRefs = useRef([]);

 useEffect(() => {
  postRefs.current.forEach((el, index) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        }
      }
    );
  });
}, []);


  return (
    <div className='container my-16 md:my-32 relative'>
      <h2 className='text-2xl lg:text-5xl text-center font-bold leading-tight'>
        Tech Trends & <br />
        IT Solutions Blog
      </h2>
      <div className='flex flex-wrap mt-10 md:mt-20'>
        {blogPosts.slice(0, 3).map((post, index) => (
          <div
            key={post.id}
            className='w-full sm:w-1/2 lg:w-1/3 p-3.5 lg:text-lg'
            ref={el => postRefs.current[index] = el}
          >
            <Link to={`/blog/${post.slug}`}>
              <img src={post.image} alt={post.title} className='rounded-3xl w-full' loading="lazy" />
              <div className='flex items-center justify-between flex-wrap mt-7'>
                <span className={`font-bold tracking-widest`} style={{ color: post.color }}>
                  SHOPIFY
                </span>
                <p>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
              <h4 className='font-bold leading-tight mt-2'>
                {post.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPost;
