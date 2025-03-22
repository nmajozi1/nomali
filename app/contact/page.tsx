import Nav from '../components/Nav'
import ContactNav from "../components/ContactNav"
import NavBanner from "../components/NavBanner"
import Contact from "../components/Contact"

const page = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden flex-wrap bg-white text-black'>
      <ContactNav />
      <Nav />
      <NavBanner title='CONTACT US' />
      <Contact />
    </div>
  )
}

export default page