export type THelp = {
  amount: number;
  name: string;
  cellphone: string;
  email: string;
  id: string;
  terms: boolean;
};

export type TApplication = {
  amount: number;
  name: string;
  cellphone: string;
  dob?: FormDataEntryValue | null;
  id: string;
  workTel?: FormDataEntryValue | null;
  homeTel?: FormDataEntryValue | null;
  currentAddress: string;
  city: string;
  ownRent?: FormDataEntryValue | null;
  postCode: string;
  currentEmployer: string;
  employerAddress?: FormDataEntryValue | null;
  lengthOfEmployment: string;
  phone?: FormDataEntryValue | null;
  email?: FormDataEntryValue | null;
  employerNumber?: FormDataEntryValue | null;
  employerCity?: FormDataEntryValue | null;
  province?: FormDataEntryValue | null;
  employerPostCode?: FormDataEntryValue | null;
  position: string;
  permOrTemp: string;
  monthlySalary: string;
  salaryDate: string;
  department?: FormDataEntryValue | null;
  nameOfPerson: string;
  addressOfPerson: string;
  cityOfPerson: string;
  provinceOfPerson: string;
  postCodeOfPerson: string;
  phoneOfPerson: string;
  relationship: string;
  netSalary: string;
  transport: string;
  housing: string;
  clothing: string;
  higherPurchase: string;
  insurrancePremiums: string;
  telephoneCellphone: string;
  groceries: string;
  loans: string;
  municipalServices: string;
  otherMonthly: string;
  bankName: string;
  branchName: string;
  branchCode: string;
  accountHolder: string;
  accountNumber: string;
  dateAccOpened: string;
};

export type FormState =
| {
    errors?: {
      amount?: string[]
      name?: string[]
      cellphone?: string[]
      email?: string[]
      id?: string[]
      terms?: string[]
    }
    message?: string
  }
| undefined

export type ApplicationFormState =
| {
    errors?: {
      amount?: string[]
      name?: string[]
      cellphone?: string[]
      dob?: string[]
      id?: string[]
      // terms?: string[]
      workTel?: string[]
      homeTel?: string[]
      currentAddress?: string[]
      city?: string[]
      ownRent?: string[]
      postCode?: string[]
      currentEmployer?: string[]
      employerAddress?: string[]
      lengthOfEmployment?: string[]
      phone?: string[]
      email?: string[]
      employerNumber?: string[]
      employerCity?: string[]
      province?: string[]
      employerPostCode?: string[]
      position?: string[]
      permOrTemp?: string[]
      monthlySalary?: string[]
      salaryDate?: string[]
      department?: string[]
      nameOfPerson?: string[]
      addressOfPerson?: string[]
      cityOfPerson?: string[]
      provinceOfPerson?: string[]
      postCodeOfPerson?: string[]
      phoneOfPerson?: string[]
      relationship?: string[]
      netSalary?: string[]
      transport?: string[]
      housing?: string[]
      clothing?: string[]
      higherPurchase?: string[]
      insurrancePremiums?: string[]
      telephoneCellphone?: string[]
      groceries?: string[]
      loans?: string[]
      municipalServices?: string[]
      otherMonthly?: string[]
      bankName?: string[]
      branchName?: string[]
      branchCode?: string[]
      accountHolder?: string[]
      accountNumber?: string[]
      dateAccOpened?: string[]
    }
    message?: string
  }
| undefined