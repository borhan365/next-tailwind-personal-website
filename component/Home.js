import Image from 'next/image'
import React from 'react'
import profilePhoto from '../public/img/others/auhor-image.jpg'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import Sidebar from './Sidebar'
// import featuredImage from '../public/img/others/auhor-image'

function Home() {
  return (
    <>
        <div className="flex sm:flex-row flex-col bg-gray-900 w-full gap-4 fixed left-0">
    
        <MobileMenu />

          <Sidebar />

          {/* body area */}
          <div className="hero-wrapper h-screen sm:h-auto p-5 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16 items-center gap-5 relative sm:left-72 w-full flex justify-between">

            {/* content */}
            <div className="w-full">

                {/* mobile logo and desktop hide */}
                <div className="sm:hidden m-auto text-center">
                  <Image className="rounded-full object-cover" width={200} height={200} src={profilePhoto} alt="mobile logo"/>
                </div>

                <h1 className="uppercase text-white text-3xl text-center sm:text-left sm:text-5xl shadow font-bold my-5">Md borhan <span className="text-yellow-500">Uddin</span> <span className="w-40 bg-indigo-500 h-3 rounded-xl"></span></h1>

                <p className="text-white capitalize text-center sm:text-left font-light text-lg leading-8 mt-5">I'm a <span className="text-white mx-1 font-bold py-1 px-3 bg-gray-800 rounded-full">Front-end Devloper</span> focused on crafting clean & user‑friendly experiences, I am passionate about building excellent website that improves the lives of those around me. I’m a highly motivated, ambitious, and creative person who can make you happy to develop an amazing website.</p>
                <Link href="/about"><button className="bg-blue-900 mt-7 w-full sm:w-max text-white py-3 px-7 hover:bg-blue-800 font-lighter rounded-full tracking-wider uppercase flex aligns-center justify-center gap-2 ">More About Me <i className="ri-arrow-right-s-line"></i></button></Link>
            </div>

            {/* image area */}
            <div className="image-area hidden sm:block w-full mr-60">
                <Image width={400} height={500} className="h-full rounded-lg shadow-xl z-10 relative ring-2 ring-white border-2" src={profilePhoto} alt="featured image" />
            </div> 

          </div>
          </div>
    </>
  )
}

export default Home
