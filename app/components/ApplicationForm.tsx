'use client'

import { useActionState } from "react";
import { useApplicationForm } from "../actions/applications.action";
import { getNumYears, getPerOrTemp, getPricess, getProvince, getRentOwn, nameOfBank } from "../utility";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";

const ApplicationForm = () => {
  const [state, action, pending] = useActionState(useApplicationForm, undefined);
  return (
    <div className="w-full flex justify-center">
      <form className="w-1/3 flex flex-col gap-4" action={action}>
        <select name="amount" defaultValue={"Amount Needed"} className="select select-bordered w-full bg-white text-black">
          <option disabled>Amount Needed</option>
          {getPricess().map((price, index) => (<option key={index}>R{price}</option>))}
        </select>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.amount?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}

        <input name="name" required type="text" placeholder="Your Name & Surname" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.name?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="cellphone" type="text" placeholder="Cellphone" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.cellphone?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        {/* <input name="dob" type="date" placeholder="Date of Birth" className="input input-bordered w-full bg-white text-black" /> */}
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.dob?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker name="dob" label="Date Of Birth" sx={{ width: '100%' }}/>
          </DemoContainer>
        </LocalizationProvider>

        <input name="id" type="text" placeholder="ID / Passport" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.id?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="workTel" type="text" placeholder="Work Tel" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.workTel?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <input name="homeTel" type="text" placeholder="Home Tel" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.homeTel?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <input name="currentAddress" type="text" placeholder="Current address" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.currentAddress?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="city" type="text" placeholder="City" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.city?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <select name="ownRent" defaultValue={"Rent"} className="select select-bordered w-full bg-white text-black">
          <option disabled>Own/Rent</option>
          {getRentOwn().map((ownership, index) => (<option key={index}>{ownership}</option>))}
        </select>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.ownRent?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="postCode" type="text" placeholder="Post Code" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.postCode?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}

        <hr className="mt-4 mb-4" />

        <p className="text-sm text-black">Employment Information</p>

        <input name="currentEmployer" type="text" placeholder="Current Employer" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.currentEmployer?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="employerAddress" type="text" placeholder="Employer Address" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.employerAddress?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <select name="lengthOfEmployment" defaultValue={1} className="select select-bordered w-full bg-white text-black">
          <option disabled>Lenght of emplyment in years</option>
          {getNumYears().map((ownership, index) => (<option key={index}>{ownership}</option>))}
        </select>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.lengthOfEmployment?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.phone?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <input name="email" type="text" placeholder="Email" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.email?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <input name="employerNumber" type="text" placeholder="Employer Number" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.employerNumber?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <input name="employerCity" type="text" placeholder="City" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.employerCity?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <select name="province" defaultValue={"Eastern Cape"} className="select select-bordered w-full bg-white text-black">
          <option disabled>Select Province</option>
          {getProvince().map((province, index) => (<option key={index}>{province}</option>))}
        </select>
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.province?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <input name="employerPostCode" type="text" placeholder="Post Code" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.employerPostCode?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}
        <input name="position" type="text" placeholder="Position" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.position?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <select name="permOrTemp" defaultValue={"Permanent Employment"} className="select select-bordered w-full bg-white text-black">
          <option disabled>Permanent or Temp</option>
          {getPerOrTemp().map((emplymentType, index) => (<option key={index}>{emplymentType}</option>))}
        </select>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.permOrTemp?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="monthlySalary" type="text" placeholder="Monthly Salary Amount" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.monthlySalary?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        {/* <input name="salaryDate" type="date" placeholder="Salary Date" className="input input-bordered w-full bg-white text-black" /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker name="salaryDate" label="Salary Date" sx={{ width: '100%' }}/>
          </DemoContainer>
        </LocalizationProvider>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.salaryDate?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="department" type="text" placeholder="Department" className="input input-bordered w-full bg-white text-black" />
        {/* {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.department?.map((error, index) => (<li key={index}>{error}</li>))}</ul>} */}

        <hr className="mt-4 mb-4" />

        <p className="text-sm text-black">Emergency Contact</p>

        <input name="nameOfPerson" type="text" placeholder="Name of person not residing with you" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.nameOfPerson?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="addressOfPerson" type="text" placeholder="Address" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.addressOfPerson?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="cityOfPerson" type="text" placeholder="City" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.cityOfPerson?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <select name="provinceOfPerson" defaultValue={"Eastern Cape"} className="select select-bordered w-full bg-white text-black">
          <option disabled>Select Province</option>
          {getProvince().map((province, index) => (<option key={index}>{province}</option>))}
        </select>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.provinceOfPerson?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="postCodeOfPerson" type="text" placeholder="Post Code" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.postCodeOfPerson?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="phoneOfPerson" type="text" placeholder="Phone" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.phoneOfPerson?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="relationship" type="text" placeholder="Relationship" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.relationship?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}

        <hr className="mt-4 mb-4" />

        <p className="text-sm text-black">Monthly Income and Expenditure</p>

        <input name="netSalary" type="text" placeholder="Net Salary" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.netSalary?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="transport" type="text" placeholder="Transport" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.transport?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="housing" type="text" placeholder="Housing" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.housing?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="clothing" type="text" placeholder="Clothing" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.clothing?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="higherPurchase" type="text" placeholder="Higher Purchase Installments" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.higherPurchase?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="insurrancePremiums" type="text" placeholder="Insurance Premiums" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.insurrancePremiums?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="telephoneCellphone" type="text" placeholder="Telephone/Cellphone" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.telephoneCellphone?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="groceries" type="text" placeholder="Groceries" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.groceries?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="loans" type="text" placeholder="Micro and Other Loans" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.loans?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="municipalServices" type="text" placeholder="Municipal Services (water, lights and rates)" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.municipalServices?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="otherMonthly" type="text" placeholder="Other" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.otherMonthly?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}

        <hr className="mt-4 mb-4" />

        <p className="text-sm text-black">Banking Details</p>

        <select name="bankName" defaultValue={"Absa Bank"} className="select select-bordered w-full bg-white text-black">
          <option disabled>Select Bank</option>
          {nameOfBank().map((bank, index) => (<option key={index}>{bank}</option>))}
        </select>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.bankName?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="branchName" type="text" placeholder="Branch Name" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.branchName?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="branchCode" type="text" placeholder="Branch Code" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.branchCode?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="accountHolder" type="text" placeholder="Account Holder" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.accountHolder?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        <input name="accountNumber" type="text" placeholder="Account Number" className="input input-bordered w-full bg-white text-black" />
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.accountNumber?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}
        {/* <input name="dateAccOpened" type="date" placeholder="Date Account Opened" className="input input-bordered w-full bg-white text-black" /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker name="dateAccOpened" label="Date Account Opened" sx={{ width: '100%' }}/>
          </DemoContainer>
        </LocalizationProvider>
        {state?.error && <ul className='list-disc text-red-600 pl-4'>{state.error.dateAccOpened?.map((error, index) => (<li key={index}>{error}</li>))}</ul>}

        <hr className="mt-4 mb-4" />

        <button disabled={pending} type="submit" className="btn btn-accent mt-8 mb-8">Submit</button>
      </form>
    </div>
  )
}

export default ApplicationForm