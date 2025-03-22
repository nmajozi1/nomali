'use client'
import { redirect } from "next/navigation";
import DocumentIcon from "./Icons/DocumentIcon"
import WhatsAppLarge from "./Icons/WhatsAppLarge"

type TWorks = {
  default?: boolean;
};

const HowItWorks = (props: TWorks) => {
  const defo = props?.default;

  const applyOnline = () => redirect('/application');

  return (
    <div className="flex flex-col bg-white text-black pb-16 w-screen">
      {defo && (
        <>
          <p className="text-center text-2xl mt-20 lg:mt-48 mb-4"><b>How it works</b></p>
          <p className="text-center mb-4 lg:mb-16 text-[#7A7A7A]">Choose one of the options below to apply</p>
        </>
      )}

      <div className="lg:flex gap-16 lg:justify-center flex-wrap">

        <div className="flex flex-col w-full lg:w-1/3 lg:border lg:border-gray-500 pl-4 pr-4 lg:shadow-2xl justify-between h-full">
          <div className="flex flex-col">
            <div className="flex justify-center mt-4 lg:mt-10 mb-8">
              <div style={{alignItems: 'center'}} className="flex justify-center align-middle h-28 w-28 rounded-full bg-orange-400">
                <DocumentIcon />
              </div>
            </div>

            <p className="text-xl mb-4"><b>OPTION 1</b></p>
            <p className="mb-4">Click on Payday Loan Application above</p>
            <ul className="mb-2 list-disc ml-8">
              <li>Give us your details</li>
              <li>Attach copy of your Passport or ID</li>
              <li>Attach copy of latest payslip</li>
              <li>Attach copy of latest 3 months bank statements</li>
              <li>We will process your application and if succesfull payout to your bank account within 24hrs</li>
              <li>The Loan repayment will be deducted from your account on your next payday by debit order</li>
            </ul>
          </div>
          <button className="btn btn-info mt-4 mb-16" onClick={applyOnline}>Apply Online</button>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 lg:border lg:border-gray-500 pl-4 pr-4 lg:shadow-2xl justify-between">
          <div className="flex flex-col">
            <div className="flex justify-center mt-4 lg:mt-10 mb-8">
              <div style={{alignItems: 'center'}} className="flex justify-center align-middle h-28 w-28 rounded-full bg-orange-400">
                <WhatsAppLarge />
              </div>
            </div>
            <p className="text-xl mb-4"><b>OPTION 2</b></p>
            <p className="mb-4">Send a Whatsapp with pictures of</p>
            <ul className="mb-2 list-disc ml-8">
              <li>Copy of your Passport or ID</li>
              <li>Copy of latest payslip</li>
              <li>Copy of latest 3 months bank statements</li>
              <li>We will process your application and if succesfull payout to your bank account within 24hrs</li>
              <li>The Loan repayment will be deducted from your account on your next payday by debit order</li>
            </ul>
          </div>
          <button className="btn btn-info mt-4 mb-16" onClick={applyOnline}>Apply via Whatsapp</button>
        </div>

      </div>
    </div>
  )
}

export default HowItWorks