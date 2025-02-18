/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  return (
    <div className="lg:flex pl-4 pr-4 lg:pl-48 lg:pr-48 gap-8 text-white bg-[#0B7278] pt-12 w-screen">
      <div className="flex flex-col gap-4 w-full lg:w-2/5">
        <p className="text-lg"><b>CONTACT US</b></p>
        <p className="text-sm">Easy & Convenient Loans from R500 to R5000</p>
        <p className="text-sm">info@nomalipaydayloans.co.za</p>
        <p className="text-sm">073 262 9307</p>
        <p className="text-sm">Willow Wood Office Park Cnr 3rd Ave, Cedar Rd, &, Johannesburg, 2021</p>
      </div>

      <div className="flex flex-col gap-4 w-full lg:w-1/5 mt-8 lg:mt-0">
        <p className="text-lg"><b>QUICK LINKS</b></p>
        <p className="text-sm">Home</p>
        <p className="text-sm">How It Works</p>
        <p className="text-sm">Payday Loan Application</p>
        <p className="text-sm">Contact Us</p>
      </div>

      <div className="flex justify-start mt-8 lg:mt-0 w-full lg:w-2/5">
        <div className="h-72 w-72">
          <img className="bg-cover" alt="ncr" src="NCR.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Contact