import { z } from 'zod';

export const helpFormSchema = z.object({
  amount: z
    .number({required_error: "Amount is required", invalid_type_error: "Amount must be a number",})
    .positive(),
  name: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters long.' }).trim(),
  cellphone: z
    .string()
    .min(10, { message: 'Cellphone number must be at least 2 characters long.' }).trim(),
  email: z
    .string()
    .min(2, { message: 'Email must be at least 2 characters long.' })
    .email({ message: "Invalid email address" })
    .trim(),
  id: z
    .string()
    .min(13, { message: 'ID must be at 13 characters long.' }).trim()
    .max(14, { message: 'ID must be at 13 characters long.' }).trim(),
  terms: z
    .boolean()
});

export const applicationFormSchema = z.object({
  amount: z
    .number({required_error: "Amount is required", invalid_type_error: "Amount must be a number",})
    .positive(),
  name: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters long.' }).trim(),
  cellphone: z
    .string()
    .min(10, { message: 'Cellphone number must be at least 10 characters long.' }).trim(),
  id: z
    .string()
    .min(13, { message: 'ID must be at 13 characters long.' }).trim()
    .max(14, { message: 'ID must be at 14 characters long.' }).trim(),
  currentAddress: z
    .string()
    .min(2, { message: 'Current address must be at least 2 characters long.' }).trim(),
  city: z
    .string()
    .min(2, { message: 'City must be at least 2 characters long.' }).trim(),
  ownRent: z
    .string()
    .min(2, { message: 'Own/Rent must be at least 2 characters long.' }).trim(),
  postCode: z
    .string()
    .min(2, { message: 'Post code must be at least 2 characters long.' }).trim(),

  // EMPLOYER DATA!

  currentEmployer: z
    .string()
    .min(2, { message: 'Post code must be at least 2 characters long.' }).trim(),
  lengthOfEmployment: z
    .string()
    .min(1, { message: 'Lenght of employment must be at least 2 characters long.' }).trim(),
  position: z
    .string()
    .min(2, { message: 'Position must be at least 2 characters long.' }).trim(),
  permOrTemp: z
    .string()
    .min(2, { message: 'Permanent or temp must be at least 2 characters long.' }).trim(),
  monthlySalary: z
    .string()
    .min(2, { message: 'Monthly Salary must be at least 2 characters long.' }).trim(),
  salaryDate: z
    .string()
    .min(2, { message: 'Salary Date must be at least 2 characters long.' }).trim(),

  nameOfPerson: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' }).trim(),
  addressOfPerson: z
    .string()
    .min(2, { message: 'Address must be at least 2 characters long.' }).trim(),
  cityOfPerson: z
    .string()
    .min(2, { message: 'City must be at least 2 characters long.' }).trim(),
  provinceOfPerson: z
    .string()
    .min(2, { message: 'Province must be at least 2 characters long.' }).trim(),
  postCodeOfPerson: z
    .string()
    .min(2, { message: 'Post code must be at least 2 characters long.' }).trim(),
  phoneOfPerson: z
    .string()
    .min(10, { message: 'Phone must be at least 10 characters long.' }).trim(),
  relationship: z
    .string()
    .min(2, { message: 'Relationship must be at least 2 characters long.' }).trim(),

  // Monthly Income and Expenditure

  netSalary: z
    .string()
    .min(2, { message: 'Net salary must be at least 2 characters long.' }).trim(),  
  transport: z
    .string()
    .min(2, { message: 'Transport must be at least 2 characters long.' }).trim(),  
  housing: z
    .string()
    .min(2, { message: 'Housing must be at least 2 characters long.' }).trim(),  
  clothing: z
    .string()
    .min(2, { message: 'Clothing must be at least 2 characters long.' }).trim(),  
  higherPurchase: z
    .string()
    .min(2, { message: 'Higher Purchase must be at least 2 characters long.' }).trim(),  
  insurrancePremiums: z
    .string()
    .min(2, { message: 'Insurance Premium must be at least 2 characters long.' }).trim(),  
  telephoneCellphone: z
    .string()
    .min(2, { message: 'Telephone/Cellphone must be at least 2 characters long.' }).trim(),  
  groceries: z
    .string()
    .min(2, { message: 'Groceries must be at least 2 characters long.' }).trim(),  
  loans: z
    .string()
    .min(2, { message: 'Loans must be at least 2 characters long.' }).trim(),  
  municipalServices: z
    .string()
    .min(2, { message: 'Services must be at least 2 characters long.' }).trim(),  
  otherMonthly: z
    .string()
    .min(2, { message: 'Other must be at least 2 characters long.' }).trim(),  

  // Banking details

  bankName: z
    .string()
    .min(2, { message: 'Bank name must be at least 2 characters long.' }).trim(),  
  branchName: z
    .string()
    .min(2, { message: 'Branch name must be at least 2 characters long.' }).trim(),  
  branchCode: z
    .string()
    .min(2, { message: 'Branch code  must be at least 2 characters long.' }).trim(),  
  accountHolder: z
    .string()
    .min(2, { message: 'Account holder must be at least 2 characters long.' }).trim(),  
  accountNumber: z
    .string()
    .min(2, { message: 'Account number must be at least 2 characters long.' }).trim(),  
  dateAccOpened: z
    .string()
    .min(2, { message: 'Date account opened must be at least 2 characters long.' }).trim(),  
});