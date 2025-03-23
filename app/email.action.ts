import { TApplication, THelp } from './types/help.type';
import { helpEmail } from './emails/help';
import { transporter } from './utils';
import { applicationEmail } from './emails/application';

const sendMail = async (htmlBody: string, subject: string) => {
  await transporter.sendMail({
    from: `"Email Service" <${process.env.EMAIL}>`,
    to: process.env.TO_EMAIL,
    subject,
    html: htmlBody,
  });

  return;
} 

export const sendHelpEmail = async (body: THelp) => {
  try {
    const htmlBody = helpEmail(body);
    const subject = '"Loan application enquiry ✔"';
    sendMail(htmlBody, subject);
    return { success: true, message: 'Help email has been sent successfuly', error: null };
  } catch (error) {
    throw new Error(`Unable to send email: , ${error}`);
  }
};

export const sendApplicationEmail = async (body: TApplication) => {
  try {
    const htmlBody = applicationEmail(body);
    const subject = '"Loan application ✔"';
    sendMail(htmlBody, subject);
    return { success: true, message: 'Application has been submitted successfuly', error: null };
  } catch (error) {
    throw new Error(`Unable to send email: , ${error}`);
  }
};