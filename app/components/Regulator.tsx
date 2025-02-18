import { content } from "../utils"
import BankStrip from "./BankStrip"

const Regulator = () => {
  return (
    <div className="flex flex-col gap-4 pl-4 pr-4 lg:pl-48 lg:pr-48 pt-4 pb-4 bg-white text-black w-screen">
      <p className="text-lg"><b>NATIONAL CREDIT REGULATOR</b></p>
      <p className="text-sm">Nomal Cash Loans is registered as credit provider with National Credit Regulator (NCR). The repayments on our Payday loans are in line with NCR guidelines.<br></br>  
        <b>Please refer to the example below:</b>
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>LOAN AMOUNT</th>
              <th>INTEREST</th>
              <th>SERVICE FEE</th>
              <th>INITIATION FEE</th>
              <th>VAT</th>
              <th>TOTAL REPAYMENT</th>
            </tr>
          </thead>
          <tbody>
            {content.map((data, index) => (
              <tr key={index}>
                <td>R{data.amount}</td>
                <td>R{data.interest}</td>
                <td>R{data.serviceFee}</td>
                <td>R{data.initiationFee}</td>
                <td>R{data.vat}</td>
                <td>R{data.totalRepayments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BankStrip />
    </div>
  )
}

export default Regulator