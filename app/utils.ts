import nodemailer from 'nodemailer';
import TConent from "./types/content.type";

export const content: TConent [] = [
  {
    amount: 500,
    interest: 25,
    serviceFee: 68,
    initiationFee: 76,
    vat: 21.45,
    totalRepayments: 689.45
  },
  {
    amount: 1000,
    interest: 50,
    serviceFee: 68,
    initiationFee: 150,
    vat: 32.70,
    totalRepayments: 1300.70
  },
  {
    amount: 2000,
    interest: 100,
    serviceFee: 135,
    initiationFee: 300,
    vat: 65.25,
    totalRepayments: 2600.25
  },
  {
    amount: 3000,
    interest: 150,
    serviceFee: 190,
    initiationFee: 450,
    vat: 96.00,
    totalRepayments: 3886.25
  },
  {
    amount: 4000,
    interest: 200,
    serviceFee: 250,
    initiationFee: 600,
    vat: 127.50,
    totalRepayments: 5177.25
  },
  {
    amount: 5000,
    interest: 250,
    serviceFee: 350,
    initiationFee: 750,
    vat: 165.00,
    totalRepayments: 6515.25
  },
];

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const bankImgPath: string [] = ['fnb.png', 'nedbank.webp', 'capitec.jpeg', 'standardBank.png', 'absa.svg'];


