import React from 'react'
import ApplicationForm from '../components/ApplicationForm'
import ContactNav from '../components/ContactNav'
import Nav from '../components/Nav'
import NavBanner from '../components/NavBanner'
import Contact from '../components/Contact'

const page = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden flex-wrap bg-white text-black'>
      <ContactNav />
      <Nav />
      <NavBanner title='LOAN APPLICATION' />
      <ApplicationForm />
      <Contact />
    </div>
  )
}

export default page

