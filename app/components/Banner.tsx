import HelpForm from "./HelpForm";

const Banner = () => {
  return (
    <div className="lg:flex bg-[url('/Banner.png')] mh-[700] bg-contain bg-no-repeat bg-right w-screen">
      <div className="max-w-[400] ml-4 mt-16 mb-8 lg:self-center lg:hidden md:hidden">
        <p className="text-2xl"><b>INSTANT ONLINE</b></p>
        <p className="text-5xl mb-8"><b>PAYDAY LOANS</b></p>
        <p className="text-l">Our payday loan application is quick and easy. We have various application routes</p>
      </div>
      <HelpForm />
      <div className="hidden sm:block lg:max-w-[400] ml-16 mb-48 self-center">
        <p className="text-2xl"><b>INSTANT ONLINE</b></p>
        <p className="text-5xl mb-8"><b>PAYDAY LOANS</b></p>
        <p className="text-l">Our payday loan application is quick and easy. We have various application routes</p>
      </div>
    </div>
  )
}

export default Banner;