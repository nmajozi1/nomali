'use client'

import { useActionState, useEffect, useState } from "react";
import { getPricess } from "../utility"
import { useHelpForm } from "../actions/help.action";

const HelpForm = () => {
  const [state, action, pending] = useActionState(useHelpForm, undefined);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    if (state?.success) {
      setShowAlert(true);
      setTimeout(() => {setShowAlert(false)}, 3000)
    }
  }, [state?.success]);

  return (
    <div className="sm:ml-2 sm:mr-2 md:ml-8 pt-4 pb-4 overflow-hidden flex justify-center lg:justify-start lg:pl-0">
      <form style={{width: 400}} action={action} className="p-4 flex flex-col gap-4 border-r-4 border-s-black bg-white rounded-lg self-center ml-2 mr-2 lg:ml-0 lg:mr-0">
        <p style={{ fontWeight: 700 }} className="text-xl text-black text-center mb-8">NEED HELP?</p>

        <select name="amount" defaultValue={"Amount Needed"} className="select select-bordered w-full bg-white text-black">
          <option disabled>Amount Needed</option>
          {getPricess().map((price, index) => (<option key={index}>R{price}</option>))}
        </select>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.amount?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}

        <input name="name" type="text" placeholder="Name" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.name?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="cellphone" type="text" placeholder="Cellphone" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.cellphone?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.email?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="id" type="text" placeholder="ID Number" className="input input-bordered w-full mb-8 bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.id?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}

        <div className="flex flex-col">
          <p style={{ fontWeight: 700 }} className="text-lg text-black mb-2">Terms & Conditions *</p>
          <p className="text-sm opacity-50 text-[#333333]">
            Terms of Service - By entering your information you are providing consent to us conducting a credit check with a credit bureau on your behalf. You also confirm that the information given in this form is true, complete and accurate
          </p>
        </div>

        <label className="label cursor-pointer w-4/5">
          <span style={{ fontWeight: 700 }} className="label-text text-black justify-start">I have read & accepted the terms.</span>
          <input name="terms" type="checkbox" className="checkbox checkbox-primary" />
        </label>

        <button disabled={pending} type="submit" className="btn btn-accent mt-8">
          {pending && (<span className="loading loading-spinner"></span>)}
          Submit
        </button>
      </form>
      {showAlert && (
        <div className="toast toast-center">
        <div className="alert alert-success">
          <span>{state?.message}</span>
        </div>
      </div>
      )}
    </div>
  )
}

export default HelpForm