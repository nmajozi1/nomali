import React from 'react'
import ContactNav from '../components/ContactNav'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import QuickAndEasy from '../components/QuickAndEasy'
import HowItWorks from '../components/HowItWorks'
import FastAndEasy from '../components/FastAndEasy'
import Details from '../components/Details'
import Regulator from '../components/Regulator'
import Contact from '../components/Contact'

const page = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden flex-wrap'>
      <ContactNav />
      <Nav />
      <Banner />
      <QuickAndEasy />
      <HowItWorks default />
      <FastAndEasy />
      <Details />
      <Regulator />
      <Contact />
    </div>
  )
}

export default page