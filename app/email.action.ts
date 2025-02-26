import nodemailer from 'nodemailer';
import { THelp } from './types/help.type';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // user: process.env.EMAIL,
    user: "ntokozo.majozi5@gmail.com",
    // pass: process.env.PASSWORD,
    pass: "ktzx zvnp ypab yidr"
  },
});

export const sendEmail = async (body: THelp) => {
  try {
    const htmlBody = `
      <b>Name: ${body.name}</b><br>
      <b>Email: ${body.email}</b><br>
      <b>Cellphone: ${body.cellphone}</b><br>
      <b>Amount: R${body.amount}</b><br>
      <b>ID Number: ${body.id}</b><br>
      <b>Terms & conditions: ${body.terms}</b><br>
    `;

    await transporter.sendMail({
      // from: `"Email Service" <${process.env.EMAIL}>`,
      from: '"Email Service" <ntokozo.majozi5@gmail.com>',
      // to: process.env.TO_EMAIL,
      to: 'info@lookho.co.za',
      subject: "Loan application ✔",
      text: "Loan application",
      html: htmlBody,
    });

    return;
  } catch (error) {
    throw new Error(`Unable to send email: , ${error}`);
  }
};