import React from 'react';
import IndexBanner from '../sections/IndexBanner';
import Brands from '../sections/Brands';
import ScrollingCard from '../sections/ScrollingCard';

function Home() {
  return (
    <>
      <IndexBanner/>
      <Brands/>
      <ScrollingCard/>
    </>
  );
}

export default Home;