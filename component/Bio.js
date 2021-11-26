import React from 'react'
import { BsBriefcaseFill } from 'react-icons/bs'

function Bio() {
  return (
    <>
      <div className="mt-3 border-orange-600 p-5 rounded bg-gray-800 shadow-xl relative mb-5 border-r-4">

        <p className="text-white font-light pl-12 leading-7">I'm a <span className="text-blue-400 mx-1 font-bold py-1 px-3 bg-gray-900 rounded-full">Front-end Devloper</span> focused on crafting clean & user‑friendly experiences, I am passionate about building excellent website that improves the lives of those around me. I’m a highly motivated, ambitious, and creative person who can make you happy to develop an amazing website.</p>
        
        <i className="text-white absolute h-10 w-10 text-3xl p-10 text-center -left-10 z-10 -top-1 overflow-hidden"><BsBriefcaseFill /></i>

        <span className="absolute -left-9 top-3 text-white bg-gray-900 text-3xl rounded-full h-20 w-20 flex justify-center items-center p-10"></span>
        
      </div>
    </>
  )
}

export default Bio
