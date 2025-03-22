import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
const Nav = () => {
  return (
    <div className="flex bg-white justify-start gap-32 h-40 md:pl-48 sm:pl-0 lg:pl-48">
      <div>
        <img className="h-40 pt-2 pb-2" alt="nomali" src="/Nomali.png" />
      </div>
      <ul style={{alignItems: 'center', fontWeight: 'bold'}} className="hidden lg:flex gap-8 list-none text-black text-xl">
        <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/home">Home</Link></li>
        <li className="cursor-pointer hover:text-[#395D1F]">How it works</li>
        <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/application">Payday application</Link></li>
        <li className="cursor-pointer hover:text-[#395D1F]">Rates and fees</li>
        <li className="cursor-pointer hover:text-[#395D1F]">Contact us</li>
      </ul>
    </div>
  )
}

export default Nav
