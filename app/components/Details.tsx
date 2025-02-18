const Details = () => {
  return (
    <div className="bg-gray-400 w-screen min-h-[400] lg:flex gap-0 pl-4 pr-4 lg:pl-48 lg:pr-48 pt-16 pb-4 text-black">
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <div className="flex flex-col gap-0">
          <p className="text-xl">MAXIMUM ANNUAL PERCENTAGE RATE</p>
          <p className="text-sm">Our maximum annual percentage rate is 38%.</p>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-xl">REPAYMENT DAYS:</p>
          <p className="text-sm">We offer repayment periods up to 30 days.</p>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-xl">COLLECTION</p>
          <p className="text-sm">ll payments are done via debit order.</p>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-xl">RENEWALS</p>
          <p className="text-sm">When you renew a loan, it will be seen as a new loan and therefore the same interest and rates will apply as for the new loans.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-1/2 pt-4 mb-8 lg:mb-0 lg:pt-0">
        <div className="flex flex-col gap-0">
          <p className="text-xl">NON-PAYMENT</p>
          <p className="text-sm">Non-payment of your account will result in a R50 service fee and 5% interest added every month. If you fail to make payment for two months, your account will be handed over to an external debt collection company.</p>
          <p className="text-sm mt-4">Not repaying your loan on time will decrease your credit rating and might make it difficult to qualify for finance at other credit providers in future.</p>
        </div>
      </div>
    </div>
  )
}

export default Details