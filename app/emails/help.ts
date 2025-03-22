import { THelp } from "../types/help.type";

export const helpEmail = (body: THelp) => `
  <body>
    <p>Good Day</p><br>
    <p>The user below has requested assistance</p><br>
    <b>Name: ${body.name}</b><br>
    <b>Email: ${body.email}</b><br>
    <b>Cellphone: ${body.cellphone}</b><br>
    <b>Amount: R${body.amount}</b><br>
    <b>ID Number: ${body.id}</b><br>
    <b>Terms & conditions: ${body.terms}</b><br><br>
    <b>Regards</b><br>
    <b>Nomali Cash Loans</b><br>
  </body>
`