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
    .max(13, { message: 'ID must be at 13 characters long.' }).trim(),
  terms: z
    .boolean()
});