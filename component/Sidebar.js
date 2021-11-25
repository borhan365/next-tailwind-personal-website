import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profilePhoto from '../public/img/others/auhor-image.jpg'

function Sidebar() {
  return (
    <>
      {/* sidebar */}
      <header className="hidden sm:block fixed">
          <div className="sidebar w-72 bg-gray-800 h-screen flex justify-between flex-col py-5 sm:hidden md:block xl:block">

            {/* profile area */}
            <div className="profile-wrapper relative text-center">
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
              <ul className="text-center">
                  <li className="px-5 pb-3"><Link className="text-white uppercase font-400 hover:text-blue-300 text-base" href="/">Home</Link></li>
                  <li className="px-5 pb-3"><Link className="text-white uppercase font-400 hover:text-blue-300 text-base" href="/about">About</Link></li>
                  <li className="px-5 pb-3"><Link className="text-white uppercase font-400 hover:text-blue-300 text-base" href="/contact">Contact</Link></li>
                  <li className="px-5 pb-3"><Link className="text-white uppercase font-400 hover:text-blue-300 text-base" href="/portfolio">Portfolio</Link></li>
                  <li className="px-5 pb-3"><Link className="text-white uppercase font-400 hover:text-blue-300 text-base" href="/blog">Blog</Link></li>
              </ul>

              {/* social-media */}
              <div className="header-footer-area">
                  <ul className="text-center flex justify-center aligns-center gap-2">
                    <li className="list-none"><a className="text-white text-xl" href="#"><i className="ri-facebook-line"></i></a></li>
                    <li className="list-none"><a className="text-white text-xl" href="#"><i className="ri-instagram-line"></i></a></li>
                    <li className="list-none"><a className="text-white text-xl" href="#"><i className="ri-github-line"></i></a></li>
                    <li className="list-none"><a className="text-white text-xl" href="#"><i className="ri-twitter-line"></i></a></li>
                    <li className="list-none"><a className="text-white text-xl" href="#"><i className="ri-linkedin-line"></i></a></li>
                  </ul>
              </div>

            </div>
        </header>
    </>
  )
}

export default Sidebar
