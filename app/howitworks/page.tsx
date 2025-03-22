import Contact from "../components/Contact"
import ContactNav from "../components/ContactNav"
import HowItWorks from "../components/HowItWorks"
import Nav from "../components/Nav"
import NavBanner from "../components/NavBanner"

const page = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden flex-wrap bg-white text-black'>
      <ContactNav />
      <Nav />
      <NavBanner title='HOW IT WORKS' />
      <HowItWorks />
      <Contact />
    </div>
  )
}

export default page