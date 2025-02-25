export type THelp = {
  amount: number;
  name: string;
  cellphone: string;
  email: string;
  id: string;
  terms: boolean;
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