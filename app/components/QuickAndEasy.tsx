/* eslint-disable @next/next/no-img-element */
const QuickAndEasy = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#0B7278] w-screen min-h-[600] gap-0 pl-2 pr-2 lg:pl-40 lg:pr-40 pt-16 pb-4">
      <div className="bg-white pl-4 pr-4 pt-8 pb-16 w-2/2 lg:w-1/2">
        <p style={{ fontWeight: 700 }} className="text-2xl text-black mb-4">Quick & Easy Loans</p>
        <p className="text-black mb-4">Up to R5 000 Cash deposited into your bank account.</p>
        <p style={{ fontWeight: 700 }} className="text-black mb-4">Easy & Convenient loans from R500 to R5000</p>
        <p className="text-black"><b>Nomali Cash Loans</b> is based on friendships, understanding, compassion, mutual trust and most importantly sharing. These principles coupled with our core values, form the foundation of our organisational culture</p>
        <div className="w-full flex justify-center mt-8 mb-4">
          <img className="h-30 w-36" alt="ncr" src="/NCR.jpg" />
        </div>
        <p className="text-black text-center mb-4"><b>Nomali Cash Loans Registered Credit Provider NCRCP16647</b></p>
        <button className="btn btn-accent w-full">CONTACT US</button>
      </div>
      <div className="bg-white w-2/2 lg:w-1/2">
        <img className="h-full" alt="approved" src="/Approved.jpeg" />
      </div>
    </div>
  )
}

export default QuickAndEasy