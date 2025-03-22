import Contact from "../components/Contact"
import ContactNav from "../components/ContactNav"
import Nav from "../components/Nav"
import NavBanner from "../components/NavBanner"
import Regulator from "../components/Regulator"

const page = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden flex-wrap bg-white text-black'>
      <ContactNav />
      <Nav />
      <NavBanner title='RATES & FEES' />
      <Regulator />
      <Contact />
    </div>
  )
}

export default page