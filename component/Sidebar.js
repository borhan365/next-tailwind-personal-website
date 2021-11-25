import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import React from 'react';
import profilePhoto from '../public/img/others/auhor-image.jpg';
import MenuItems from './Data/MenuItems';
import SocialIcons from './Data/SocialIcons';

function Sidebar() {
  const router = useRouter();
  return (
    <>
      {/* sidebar */}
      <header className="hidden sm:block fixed">
          <div className="sidebar w-72 bg-gray-800 h-screen flex justify-between flex-col py-5 sm:hidden md:block xl:block">

            {/* profile area */}
            <div className="profile-wrapper relative text-center mb-10 cursor-pointer">
              <Image width={150} height={150} className="rounded-full h-40 w-40 flex items-center justify-center mx-auto mt-2 object-cover shadow-xl border-2" src={profilePhoto} alt="alt" />

              {/* online status */}
              <div className="online w-7 h-7 bg-green-800 rounded-full absolute right-14 top-10 border-2">     

              </div>
              <div className="profile-content-area">
                <h2 className="text-white text-center mt-4 mb-1 text-md uppercase">Md Borhan Uddin</h2>
                <p className="text-white text-center text-xs font-light">Front End Developer</p>
                <p className="w-10 mx-auto mt-2 bg-indigo-500 h-2 rounded-xl"></p>
              </div>
            </div>

              {/* menu area */}
              <ul className="ml-10">
                {
                  MenuItems.map((menu, index) => (
                    <li key={index} className="px-5 pb-5">
                      <Link href={menu.url}>
                        <div className={` uppercase font-400 transition ease-in-out duration-300 hover:text-blue-300 cursor-pointer text-lg flex justify-start gap-3
                        ${
                          router.asPath === menu.url
                            ? "text-green-500"
                            : "text-white"
                        }`}><span className="text-2xl">{menu.icon}</span> {menu.label}</div>
                      </Link>
                    </li>
                  ))
                }
              </ul>

              {/* social-media */}
              <div className="header-footer-area">
                  <ul className="flex justify-center ml-3 mt-10 gap-4">
                    {
                      SocialIcons.map((item, index) => (
                        <li key={index} className="list-none">
                          <Link href={item.url}>
                            <span className="text-white hover:text-green-500 cursor-pointer text-xl">{item.icon}</span>
                            </Link>
                        </li>
                      ))
                    }
                    
                    
                  </ul>
              </div>

            </div>
        </header>
    </>
  )
}

export default Sidebar
