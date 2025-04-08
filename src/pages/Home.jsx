import React from 'react';
import IndexBanner from '../sections/IndexBanner';
import Brands from '../sections/Brands';
import ScrollingCard from '../sections/ScrollingCard';
import ItServices from '../sections/ItServices';

function Home() {
  return (
    <>
      <IndexBanner/>
      <Brands/>
      <ScrollingCard/>
      {/* <ItServices /> */}
    </>
  );
}

export default Home;