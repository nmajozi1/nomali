/* eslint-disable @next/next/no-img-element */
import { bankImgPath } from "../utils"

const BankStrip = () => {
  return (
    <div className="flex justify-between">
        {bankImgPath.map((path, index) => (
          <div key={index} className="h-32 w-32 flex flex-col justify-center">
            <img className="bg-contain" alt="bank" src={`/${path}`} />
          </div>
        ))}
      </div>
  )
}

export default BankStrip