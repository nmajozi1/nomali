'use server'

import { sendApplicationEmail } from "../email.action";
import { applicationFormSchema } from "../lib/definitions"
import { ApplicationFormState } from "../types/help.type"

export const useApplicationForm = async (state: ApplicationFormState, formData: FormData) => {
  const amountValue = formData.get('amount');
  // const term = formData.get('terms');

  const numberValue = typeof amountValue === 'string'
  ? parseInt(amountValue.replace('R', ''), 10)
  : 0;

  // const termState = term && term === 'on' ? true : false;

  const aplicationData = applicationFormSchema.safeParse({
    amount: numberValue,
    name: formData.get('name'),
    cellphone: formData.get('cellphone'),
    id: formData.get('id'),
    currentAddress: formData.get('currentAddress'),
    city: formData.get('city'),
    ownRent: formData.get('ownRent'),
    postCode: formData.get('postCode'),

    currentEmployer: formData.get('currentEmployer'),
    lengthOfEmployment: formData.get('lengthOfEmployment'),
    position: formData.get('position'),
    permOrTemp: formData.get('permOrTemp'),
    monthlySalary: formData.get('monthlySalary'),
    salaryDate: formData.get('salaryDate'),

    netSalary: formData.get('netSalary'),
    transport: formData.get('transport'),
    housing: formData.get('housing'),
    clothing: formData.get('clothing'),
    higherPurchase: formData.get('higherPurchase'),
    insurrancePremiums: formData.get('insurrancePremiums'),
    telephoneCellphone: formData.get('telephoneCellphone'),
    groceries: formData.get('groceries'),
    loans: formData.get('loans'),
    municipalServices: formData.get('municipalServices'),
    otherMonthly: formData.get('otherMonthly'),

    nameOfPerson: formData.get('nameOfPerson'),
    addressOfPerson: formData.get('addressOfPerson'),
    cityOfPerson: formData.get('cityOfPerson'),
    provinceOfPerson: formData.get('provinceOfPerson'),
    postCodeOfPerson: formData.get('postCodeOfPerson'),
    phoneOfPerson: formData.get('phoneOfPerson'),
    relationship: formData.get('relationship'),

    bankName: formData.get('bankName'),
    branchName: formData.get('branchName'),
    branchCode: formData.get('branchCode'),
    accountHolder: formData.get('accountHolder'),
    accountNumber: formData.get('accountNumber'),
    dateAccOpened: formData.get('dateAccOpened'),

    // terms: termState,
  });

  if (aplicationData?.success) {
    const sendData = {
      ...aplicationData.data,
      dob: formData.get('dob'),
      workTel: formData.get('workTel'),
      homeTel: formData.get('homeTel'),
      ownRent: formData.get('ownRent'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      employerNumber: formData.get('employerNumber'),
      employerAddress: formData.get('employerAddress'),
      employerCity: formData.get('employerCity'),
      province: formData.get('province'),
      employerPostCode: formData.get('employerPostCode'),
      department: formData.get('department'),
    };

    return await sendApplicationEmail(sendData);
  };

  return { success: false, message: 'failed submit the application', open: false, error: aplicationData?.error?.flatten().fieldErrors };
} 