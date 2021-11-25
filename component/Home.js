import React from 'react'
import Image from 'next/image'
import profilePhoto from '../public/img/others/auhor-image.jpg'
// import featuredImage from '../public/img/others/auhor-image'

function Home() {
  return (
    <div>
        <div className="flex bg-gray-900 w-full gap-4 fixed left-0">

          {/* sidebar */}
          <header className="">
            <div className="sidebar w-72 bg-gray-800 h-screen flex justify-between flex-col py-5">

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
                    <li className="px-5 pb-3"><a className="text-white uppercase font-400 hover:text-blue-300 text-base" href="index.html">Home</a></li>
                    <li className="px-5 pb-3"><a className="text-white uppercase font-400 hover:text-blue-300 text-base" href="about.html">About</a></li>
                    <li className="px-5 pb-3"><a className="text-white uppercase font-400 hover:text-blue-300 text-base" href="contact.html">Contact</a></li>
                    <li className="px-5 pb-3"><a className="text-white uppercase font-400 hover:text-blue-300 text-base" href="portfolio.html">Portfolio</a></li>
                    <li className="px-5 pb-3"><a className="text-white uppercase font-400 hover:text-blue-300 text-base" href="blog.html">Blog</a></li>
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

          {/* body area */}
          <div className="hero-wrapper w-full flex justify-between items-center px-10 gap-5">

            {/* content */}
            <div className="content-area w-full">
                <h1 className="uppercase text-white text-5xl shadow font-bold my-5">Md borhan <span className="text-yellow-500">Uddin</span> <span className="w-40 bg-indigo-500 h-3 rounded-xl"></span></h1>

                <p className="text-white capitalize font-light text-lg leading-8 mt-5">I'm a <span className="text-white mx-1 font-bold py-1 px-3 bg-gray-800 rounded-full">Front-end Devloper</span> focused on crafting clean & user‑friendly experiences, I am passionate about building excellent website that improves the lives of those around me. I’m a highly motivated, ambitious, and creative person who can make you happy to develop an amazing website.</p>
                <button className="bg-blue-900 mt-7 text-white py-3 px-7 hover:bg-blue-800 font-lighter rounded-full tracking-wider uppercase flex aligns-center justify-center gap-2">More About Me <i className="ri-arrow-right-s-line"></i></button>
            </div>

            {/* image area */}
            <div className="image-area w-full">
                <div className="profile-thumb w-full">
                  <Image fill width={400} height={500} className="h-full rounded-lg shadow-xl w-full z-10 relative ring-2 ring-white border-2" src={profilePhoto} alt="featured image" />
                </div>
            </div> 

          </div>
          </div>
    </div>
  )
}

export default Home
