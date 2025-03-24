import React from 'react'
import Logo from "/logo.svg";

const Footer = () => {
  return (
    <footer className=''>
      <div className="container">
        <div className='flex flex-wrap'>
          <div className='w-6/12'>
            <img src={Logo} alt="Logo" className='max-w-[188px]' />
            <p className='mt-7 max-w-[400px]'>Founded in 2011, Chameleon Infotech LLP is a leading website design and development company in India that offers services globally.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer