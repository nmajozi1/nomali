'use server'

import { sendHelpEmail } from "../email.action";
import { helpFormSchema } from "../lib/definitions"
import { FormState } from "../types/help.type"

export const useHelpForm = async (state: FormState, formData: FormData) => {
  const amountValue = formData.get('amount');
  const term = formData.get('terms');

  const numberValue = typeof amountValue === 'string'
  ? parseInt(amountValue.replace('R', ''), 10)
  : 0;

  const termState = term && term === 'on' ? true : false;

  const helpData = helpFormSchema.safeParse({
    amount: numberValue,
    name: formData.get('name'),
    cellphone: formData.get('cellphone'),
    email: formData.get('email'),
    id: formData.get('id'),
    terms: termState,
  });

  if (helpData?.success) return await sendHelpEmail(helpData.data);

  return { success: false, message: 'failed to register new user', open: false, error: helpData?.error?.flatten().fieldErrors };
} 