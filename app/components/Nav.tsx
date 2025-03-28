'use client'
import Link from "next/link"
import BurgerMenuIcon from "./Icons/BurgerMenuIcon"

/* eslint-disable @next/next/no-img-element */
const Nav = () => {
  return (
    <div className="flex bg-white justify-between lg:justify-start gap-32 h-40 md:pl-48 sm:pl-0 lg:pl-48">
      <div className="flex justify-between w-screen lg:w-28 md:w-28">
        <img className="h-40 pt-2 pb-2" alt="nomali" src="/Nomali.png" />
        <div className="drawer lg:hidden md:hidden flex justify-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="flex flex-col justify-center h-full">
              <button 
                className="btn btn-lg btn-square btn-ghost lg:hidden drawer-button mr-2"
                onClick={() => {
                  const drawer = document.getElementById("my-drawer") as HTMLInputElement;
                  if (drawer) drawer.checked = true;
                }}
                >
                <BurgerMenuIcon />
              </button>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"/>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/home">Home</Link></li>
              <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/howitworks">How it works</Link></li>
              <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/application">Payday application</Link></li>
              <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/rates">Rates and fees</Link></li>
              <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <ul style={{alignItems: 'center', fontWeight: 'bold'}} className="hidden lg:flex gap-8 list-none text-black text-xl">
        <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/home">Home</Link></li>
        <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/howitworks">How it works</Link></li>
        <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/application">Payday application</Link></li>
        <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/rates">Rates and fees</Link></li>
        <li className="cursor-pointer hover:text-[#395D1F]"><Link href="/contact">Contact us</Link></li>
      </ul>
    </div>
  )
}

export default Nav
