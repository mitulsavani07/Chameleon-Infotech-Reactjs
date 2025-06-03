import React from 'react'

import ServicesBanner from '../sections/ServicesBanner'
import ScrollingCard from '../sections/ScrollingCard'
import ItServices from '../sections/ItServices'
import SuccessStories from '../sections/SuccessStories'


function Services() {
  return (
    <>
      <ServicesBanner/>
      <ScrollingCard/>
      <ItServices />
      <SuccessStories/>
    </>
  )
}

export default Services
