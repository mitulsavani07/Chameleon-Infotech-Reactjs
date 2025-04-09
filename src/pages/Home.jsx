import React from 'react';
import IndexBanner from '../sections/IndexBanner';
import Brands from '../sections/Brands';
import ScrollingCard from '../sections/ScrollingCard';
import ItServices from '../sections/ItServices';
import Projects from '../sections/Projects';

function Home() {
  return (
    <>
      <IndexBanner/>
      <Brands/>
      <ScrollingCard/>
      <ItServices />
      <Projects/>
    </>
  );
}

export default Home;