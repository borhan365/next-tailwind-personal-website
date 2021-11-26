import Image from 'next/image'
import React from 'react'
import Bio from './Bio'
import Portfolio from './Data/Portfolio'
import Title from './Title'

function PortfolioPage() {
  return (
    <>
      <div class="portfolio-wrapper px-5 sm:px-10 pb-20 absolute left-0 sm:left-72 right-0 bg-gray-900">
                
            {/* title */}
            <Title title="Portfolio" />

            {/* bio */}
            <Bio />

            {/* Wrapper */}
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

              {
                Portfolio.map((item, index) => (
                  <div key={index} class="portfolio-item mt-3 border-2 border-gray-900 rounded bg-gray-800 shadow-xl relative overflow-hidden cursor-pointer">
                    
                    <div className="h-60 w-100">
                    <Image layout='fill' class="rounded shadow-xl object-cover w-100" src={item.img} alt={item.name} />
                    </div>
                    
                    {/* excerpt */}
                    <div class="grid grid-cols-3 absolute top-0 left-0 p-3 gap-1 w-full">
                        <span class="bg-green-700 rounded-full text-xs py-1 px-4 shadow-xl text-white inline text-center">Bootstrap</span>
                        <span class="bg-yellow-700 rounded-full text-xs py-1 px-4 shadow-xl text-white inline text-center">Wordpress</span>
                        <span class="bg-blue-700 rounded-full text-xs py-1 px-4 shadow-xl text-white inline text-center">Swiper</span>
                    </div>

                    {/* button */}
                    <button class="bg-gray-800 text-white py-1 px-10 w-full absolute -bottom-10 uppercase">Visit</button>
                </div>
                ))
              }

            </div>

        </div>
    </>
  )
}

export default PortfolioPage
