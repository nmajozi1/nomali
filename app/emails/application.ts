import { TApplication } from "../types/help.type";

export const applicationEmail = (body: TApplication) => `
  <body>
    <p>Good Day</p><br>
    <p>${body.name} has put in an application for a pay day loan. <br><b>Please proccess accordingly.</b></p>
    <h4>Personal Information</h4>
    <b>Name:</b> ${body.name}<br>
    <b>Cellphone:</b> ${body.cellphone}<br>
    <b>Date Of Birth:</b> ${body?.dob}<br>
    <b>ID Number:</b> ${body.id}<br>
    <b>Work Tel:</b> ${body?.workTel}<br>
    <b>Home Tel:</b> ${body?.homeTel}<br>
    <b>Current Address:</b> ${body.currentAddress}<br>
    <b>City:</b> ${body.city}<br>
    <b>Own/Rent:</b> ${body.ownRent}<br>
    <b>Postal Code:</b> ${body.postCode}<br></br>

    <h4>Employment Information</h4>
    <b>Current Employer:</b> ${body.currentEmployer}<br>
    <b>Employer Address:</b> ${body.employerAddress}<br>
    <b>Length of Employment:</b> ${body.lengthOfEmployment}<br>
    <b>Phone:</b> ${body.phone}<br>
    <b>Employer Number:</b> ${body.employerNumber}<br>
    <b>Employer City:</b> ${body.employerCity}<br>
    <b>Province:</b> ${body.province}<br>
    <b>Employer Post Code:</b> ${body.employerPostCode}<br>
    <b>position:</b> ${body.position}<br>
    <b>Permanent Or Temp:</b> ${body.permOrTemp}<br>
    <b>Monthly Salary:</b> R${body.monthlySalary}<br>
    <b>Salary Date:</b> ${body.salaryDate}<br><br>

    <h4>Emergency Contact</h4>
    <b>Name of Person Not Residing With you:</b> ${body.nameOfPerson}<br>
    <b>Emergency Contact Address:</b> ${body.addressOfPerson}<br>
    <b>City:</b> ${body.cityOfPerson}<br>
    <b>Province:</b> ${body.provinceOfPerson}<br>
    <b>Post Code:</b> ${body.postCodeOfPerson}<br>
    <b>Phone:</b> ${body.phoneOfPerson}<br>
    <b>Relationship:</b> ${body.relationship}<br><br>

    <h4>Monthly Income and Expenditure</h4>
    <b>Net Salary:</b> R${body.netSalary}<br>
    <b>Transport:</b> R${body.transport}<br>
    <b>Housing:</b> R${body.housing}<br>
    <b>Higher Purchase Installments:</b> R${body.higherPurchase}<br>
    <b>Insurance Premiums:</b> R${body.insurrancePremiums}<br>
    <b>Telephone/Celphone:</b> R${body.telephoneCellphone}<br>
    <b>Groceries:</b> R${body.groceries}<br>
    <b>Micro and Other Loans:</b> R${body.loans}<br>
    <b>Municipal Services (Water, lights and rates):</b> R${body.municipalServices}<br>
    <b>Other:</b> R${body.otherMonthly}<br><br>

    <h4>Banking Details</h4>
    <b>Name of Bank:</b> ${body.bankName}<br>
    <b>Branch Name:</b> ${body.branchName}<br>
    <b>Branch Code:</b> ${body.branchCode}<br>
    <b>Account Holder:</b> ${body.accountHolder}<br>
    <b>Account Number:</b> ${body.accountNumber}<br>
    <b>Date Opened:</b> ${body.dateAccOpened}<br><br>

    <b>Regards</b><br>
    <b>Nomali Cash Loans</b><br>
  </body>
`