import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBoxArrowRight } from 'react-icons/bs'
import { MdAccessTime } from 'react-icons/md'
import Title from '../component/Title'
import Blog from './Data/Blog'

function BlogPage() {
  return (
    <>
      {/* Blog area */}
      <div class="blog-wrapper px-10 pb-20 absolute left-72 bg-gray-900">
          {/* title */}
          <Title title="Blog" />

            <div class="grid grid-cols-2 gap-8 gap-y-20 rounded mt-4 w-full">

                {
                  Blog.map((item, index) => (
                    <div key={index} class="mt-2 rounded bg-gray-100 mb-60 w-full shadow-xl relative">

                        {/* thumbnail */}
                        <div class="rounded rounded-b-none w-full h-full object-cover mb-2">
                            <Image layout='fill' class="rounded rounded-b-none w-full h-full object-cover" src={item.img} alt={item.title} />
                        </div>

                        {/* content */}
                        <div class="text-white pt-5">

                            {/* excerpt */}
                            <div class="pb-3 flex justify-start gap-2 items-center">
                                <span class="bg-gray-800 py-1 text-sm px-3 rounded-xl shadow-xl text-gray-300 flex justify-start gap-1 items-center w-max"><i class=""><AiOutlineUser /></i> {item.author}</span>

                                <span class="bg-gray-800 py-1 text-sm px-3 rounded-xl shadow-xl text-gray-300 flex justify-start gap-1 items-center w-max"> <MdAccessTime /> {item.date}</span>

                            </div>

                            <Link class="text-white curser-pointer" href={`/single/${item.id}`}>
                                <a>
                                  <h2 class="text-2xl">{item.title}</h2>
                                </a>
                            </Link>

                            <p class="text-sm text-gray-300 font-light mt-2">{item.desc}</p> 

                            <button class="bg-gray-700 hover:bg-blue-900 transition-all py-2 px-10 text-white text-md uppercase w-full flex justify-center items-center gap-2 shadow-xl mt-2"> <BsBoxArrowRight /> Learn more </button>

                        </div>
                    </div>
                  ))
                }                

              </div>
      </div>
    </>
  )
}

export default BlogPage
