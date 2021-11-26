import Image from 'next/image'
import React from 'react'
import Bio from './Bio'
import SubTitle from './SubTitle'
import Title from './Title'
import ExperianceEducation from './Data/ExperianceEducation'
import Testimonial from './Data/Testimonial'
import WhatIDo from './Data/WhatIDo'
import Pricing from './Data/Pricing'
import FunFact from './Data/FunFact'

import { BsBriefcaseFill } from 'react-icons/bs'

function AboutPage() {
  return (
    <>
      {/* about body area */}
        <div className="about-wrapper px-5 sm:px-10 pb-5 sm:pb-10 absolute sm:left-72 bg-gray-900">

          {/* about bio */}
          <section>

            {/* title */}
            <Title title="About Us" />

            {/* bio */}
            <Bio />

          </section>

          {/* experience and educations */}
          <section>

            {/* sub title */}
            <SubTitle title="experience & Educations" />

            {/* wrapper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-white">

              {
                ExperianceEducation.map((item) => (
                  <div className="bg-gray-800 p-5 rounded shadow-xl border-blue-500 flex justify-start gap-3 items-baseline">
                  
                  {/* icon */}
                  <div className="flex justify-center items-center flex-col">
                    <i className="ri-briefcase-line w-10 h-10 flex justify-center items-center bg-gray-900 rounded-full border border-blue-800 shadow-xl"><BsBriefcaseFill /></i>
                    <span className="w-0.5 h-20 bg-gray-600"></span>
                  </div>
  
                  {/* content */}
                  <div className="my-3 w-full">
                      <p className="bg-gray-900 rounded-full px-6 py-1 text-xs text-gray-500 text-center inline-block mb-2">{item.year}</p> <br />
                      <h3 className="p-1 inline font-bold uppercase">{item.title} - <span className="uppercase text-gray-500 font-bold inline">{item.subTitle}</span></h3>
                      <h4 className="text-gray-400 mt-2 font-light">{
                      item.desc}</h4>
                  </div>
                </div>
                ))
              }
            </div>

          </section>

          {/*  what i do wrapper */}
          <section>

            {/* title */}
            <SubTitle title="What I Do" />

            <div className="text-white grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-5 mt-2">

              {
                WhatIDo.map((item) => (
                  <div className="bg-gray-800 p-8 rounded shadow-lg w-full flex flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
                      <i className="ri-store-2-line text-5xl"></i>
                      <h3 className="text-white-300 text-2xl font-semibold my-2 text-shadow">{item.title}</h3>
                      <p className="font-lighter">{item.desc}</p>
                  </div>
                ))
              }

            </div>
          </section>

        {/* Testimonial */}
        <section>

          {/* title */}
          <SubTitle title="Testimonial"/>

            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-10 mt-2 w-full text-white">

              {
                Testimonial.map((item) => (
                  <div className="p-10 bg-gray-800 relative border-blue-500 border-l-2 rounded">
                    <p className="font-light">{item.desc}</p>

                    <div className="flex w-full justify-between items-center mt-5">
                        <div className="flex justify-between gap-2 items-center">
                          <Image width="50" height="50" className="h-16 w-16 rounded-full object-cover border-2" src={item.img} alt={item.name} />
                            <div>
                              <h3 className="capitalize font-medium">{item.name}</h3>
                              <p className="font-light text-xs">{item.title}</p>
                            </div>
                        </div>
                        <div>
                          <i className="ri-double-quotes-r text-7xl"></i>
                        </div>
                    </div>
                  </div>
                ))
              }
                
            </div>
        </section>

        {/* pricing */}
        <section>

          {/* title */}
          <SubTitle title="Pricing" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 text-white">

              {
                Pricing.map((item) => (
                  <div className="bg-gray-800 p-10 rounded text-center shadow-xl border-b-2 border-blue-500">
                    <span className="text-gray-400">{item.type}</span>
                    <h2 className="text-white-600 font-bold text-5xl pt-5 text-shadow">{item.price}</h2>
                    <span className="text-gray-500 text-sm block mb-5">{item.priceType}</span>
                    <button className="bg-blue-600 border-2 py-2 px-10 inline-block text-white rounded-full shadow-xl mb-3">{item.button}</button>

                    <ul className="text-left mt-4 flex flex-col gap-2">
                      <li className="text-gray-300"><i className="ri-checkbox-circle-line mr-2 text-xl text-gray-400"></i>Wireframinig</li>
                      <li className="text-gray-300"><i className="ri-checkbox-circle-line mr-2 text-xl text-gray-400"></i>Responsive Design</li>
                      <li className="text-gray-300"><i className="ri-checkbox-circle-line mr-2 text-xl text-gray-400"></i>Browser Compatiablity</li>
                    </ul>
                </div>
                ))
              }
              
            </div>
        </section>

        {/* fun fact */}
        <section>

          {/* title */}
          <SubTitle title="Fun Fact"/>

            <div className="flex justify-between flex-col sm:flex-row gap-4 rounded">

              {
                FunFact.map((item) => (
                  <div className="mt-2 p-5 rounded flex justify-center items-center gap-2 flex-col bg-gray-800 w-full shadow-xl">
                    <h2 className="text-white text-3xl font-bold">{item.count} <span className="font-bold text-blue-500">+</span></h2>
                    <h3 className="text-gray-300 text-sm">{item.name}</h3>
                </div>
                ))
              }

            </div>
        </section>

        </div>
    </>
  )
}

export default AboutPage
