import React, { useRef } from 'react';
import IndexBanner from '../sections/IndexBanner';
import Brands from '../sections/Brands';
import ScrollingCard from '../sections/ScrollingCard';
import ItServices from '../sections/ItServices';
import Projects from '../sections/Projects';
import TextAnimation from '../sections/TextAnimation';
import Testimonials from '../sections/Testimonials';
import BlogPost from '../sections/BlogPost';

function Home() {
  const bannerRef = useRef(null); // 👈 Shared ref
  return (
    <>
      <IndexBanner bannerRef={bannerRef} />
      <Brands/>
      <ScrollingCard bannerRef={bannerRef}/>
      <ItServices />
      <Projects/>
      <TextAnimation/>
      <Testimonials/>
      <BlogPost/>
    </>
  );
}

export default Home;