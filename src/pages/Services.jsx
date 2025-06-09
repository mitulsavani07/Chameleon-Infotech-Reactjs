import React from 'react'

import ServicesBanner from '../sections/ServicesBanner'
import ScrollingCard from '../sections/ScrollingCard'
import ItServices from '../sections/ItServices'
import SuccessStories from '../sections/SuccessStories'
import GrowthInfo from '../sections/GrowthInfo'
import Faq from '../sections/Faq'


function Services() {
  return (
    <>
      <ServicesBanner/>
      <ScrollingCard/>
      <ItServices />
      {/* <SuccessStories/> */}
      <GrowthInfo/>
      <Faq/>
    </>
  )
}

export default Services
