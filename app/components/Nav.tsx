'use client'
import Link from "next/link"
import BurgerMenu from "../icons/BurgerMenu"

/* eslint-disable @next/next/no-img-element */
const Nav = () => {
  // const openDrawer = () => {
  //   if (document) {
  //     document?.getElementById("my-drawer").checked = false
  //   }
  // }

  return (
    <div className="flex bg-white justify-between lg:justify-start gap-32 h-40 md:pl-48 sm:pl-0 lg:pl-48">
      <div className="flex justify-between w-screen lg:w-28 md:w-28">
        <img className="h-40 pt-2 pb-2" alt="nomali" src="/Nomali.png" />
        <div className="drawer lg:hidden md:hidden flex justify-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="flex flex-col justify-center h-full">
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button lg:hidden mr-2">
                <BurgerMenu />
              </label>
            </div>
          </div>
          <div className="drawer-side">
            {/* <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label> */}
            <button
              onClick={() => {
                const drawer = document.getElementById("my-drawer") as HTMLInputElement;
                if (drawer) drawer.checked = false;
              }}
              aria-label="close sidebar"
              className="drawer-overlay"
            ></button>
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
