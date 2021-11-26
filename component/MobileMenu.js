import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import MenuItems from './Data/MenuItems'
import Social from './Social'


function MobileMenu() {
  const [Sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar(!Sidebar)
  }
  return (
    <>
      <div className="sm:hidden w-full h-16 bg-gray-800 z-auto left-0 right-0 text-white flex justify-between items-center px-5 shadow-lg">
        <Link href="/">
            <h2 className="w-100 text-xl">Md Borhan Uddin</h2>
        </Link>
        <i onClick={toggleSidebar} className="text-white text-3xl"><HiOutlineMenu /></i>
      </div>

      {/* menu */}
      <div className={`bg-gray-800 w-60 h-screen fixed top-0 z-20 flex flex-col justify-around sm:hidden ${Sidebar ? 'left-0 transition duration-800 ease-in-out' : '-left-60'}`}>
          <ul className="px-10">
        {
            MenuItems.map((item, index) => (
            <li key={index} className="flex justify-start items-center gap-3 pb-5">
              <i className="text-white text-2xl">{item.icon}</i>
              <Link href={item.url}>
                <div className="text-white text-xl">{item.label}</div>
              </Link>
            </li>
          ))
        }
        </ul>

        <Social />
      </div>
    </>
  )
}

export default MobileMenu
