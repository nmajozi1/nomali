import EmailIcon from "./Icons/EmailIcon"
import WhatsappIcon from "./Icons/WhatsappIcon"

const ContactNav = () => {
  return (
    <div style={{alignItems: 'center'}} className="flex lg:pl-48 md:pl-8 pl-0 h-10 bg-[#FD983F] gap-8 text-center text-black text-sm lg:text-lg">
      <p className="flex gap-2"><WhatsappIcon /> 073 262 9307</p>
      <p className="flex gap-2"><EmailIcon /> info@nomalipaydayloans.co.za</p>
    </div>
  )
}

export default ContactNav