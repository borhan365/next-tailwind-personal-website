import Link from 'next/link'
import React from 'react'
import Sidebar from '../../component/Sidebar'

function BlogDetails() {
  return (
    <>
              <div className="flex bg-gray-900 w-full">

{/* <!-- Sidebar --> */}
<Sidebar />

{/* <!-- Blog Body Area --> */}
<div className="blog-wrapper px-10 pb-20 absolute left-72 bg-gray-900">                

    {/* <!-- thumb --> */}
    <div className="py-5 pt-10 rounded-xl w-full max-h-96 overflow-hidden">
        <img className="w-full rounded-md" src="/img/blog/cover.jpg" alt="blog cover" />
    </div>

    {/* <!-- title --> */}
    <div className="text-gray-100 text-center mt-7 py-6">
        <h1 className="text-5xl font-bold">Before start your online business you must know this 10 Pro Tips</h1>
    </div>

    {/* <!-- excerpts --> */}
    <div className="p-3 text-center">
      <span className="bg-gray-800 py-1 text-xs px-3 rounded-xl shadow-xl text-gray-300"><i className="ri-user-line"></i> Md Borhan Uddin</span>
      <span className="bg-gray-800 py-1 text-xs px-3 rounded-xl shadow-xl text-gray-300"><i className="ri-calendar-line"></i> 29th june 2021</span>                                
  </div>


  {/* <!-- content --> */}
  <div className="font-light text-md mt-5 text-gray-300">
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem non vel modi illo! Nesciunt adipisci sed consequuntur numquam quidem assumenda obcaecati alias saepe, corporis quis laborum commodi fugit mollitia est! Sint quibusdam laborum unde delectus sit. Est sequi, magni sed ratione laborum dolores unde rerum quibusdam fuga voluptate. A, et.</p>
      
      <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolore quo optio, rerum error incidunt cumque maxime nemo quisquam! Dolor delectus laborum ducimus iusto, libero, recusandae unde ab quidem deleniti expedita porro beatae odio repellat. Eveniet fugiat dicta molestiae impedit odio amet beatae officia tempora aperiam voluptatum quis assumenda inventore maiores eligendi doloremque voluptatem sequi harum, qui odit alias cumque nemo magnam! Suscipit sunt aut similique? Doloremque tenetur corrupti fugiat, dignissimos officiis incidunt est id quia eos esse nulla ea eligendi sint ullam consequatur, soluta blanditiis suscipit nesciunt nam reiciendis! Quis odit excepturi veniam fugiat voluptas numquam eveniet ullam tenetur!
      </p>
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem non vel modi illo! Nesciunt adipisci sed consequuntur numquam quidem assumenda obcaecati alias saepe, corporis quis laborum commodi fugit mollitia est! Sint quibusdam laborum unde delectus sit. Est sequi, magni sed ratione laborum dolores unde rerum quibusdam fuga voluptate. A, et.</p>
      
      <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolore quo optio, rerum error incidunt cumque maxime nemo quisquam! Dolor delectus laborum ducimus iusto, libero, recusandae unde ab quidem deleniti expedita porro beatae odio repellat. Eveniet fugiat dicta molestiae impedit odio amet beatae officia tempora aperiam voluptatum quis assumenda inventore maiores eligendi doloremque voluptatem sequi harum, qui odit alias cumque nemo magnam! Suscipit sunt aut similique? Doloremque tenetur corrupti fugiat, dignissimos officiis incidunt est id quia eos esse nulla ea eligendi sint ullam consequatur, soluta blanditiis suscipit nesciunt nam reiciendis! Quis odit excepturi veniam fugiat voluptas numquam eveniet ullam tenetur!
      </p>
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem non vel modi illo! Nesciunt adipisci sed consequuntur numquam quidem assumenda obcaecati alias saepe, corporis quis laborum commodi fugit mollitia est! Sint quibusdam laborum unde delectus sit. Est sequi, magni sed ratione laborum dolores unde rerum quibusdam fuga voluptate. A, et.</p>
      
      <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolore quo optio, rerum error incidunt cumque maxime nemo quisquam! Dolor delectus laborum ducimus iusto, libero, recusandae unde ab quidem deleniti expedita porro beatae odio repellat. Eveniet fugiat dicta molestiae impedit odio amet beatae officia tempora aperiam voluptatum quis assumenda inventore maiores eligendi doloremque voluptatem sequi harum, qui odit alias cumque nemo magnam! Suscipit sunt aut similique? Doloremque tenetur corrupti fugiat, dignissimos officiis incidunt est id quia eos esse nulla ea eligendi sint ullam consequatur, soluta blanditiis suscipit nesciunt nam reiciendis! Quis odit excepturi veniam fugiat voluptas numquam eveniet ullam tenetur!
      </p>            

  </div>

  {/* <!-- share --> */}
  <div className="flex justify-end aligns-center">
      <ul className="flex justify-start aligns-center gap-2 mt-10">
        
        <li className="list-none text-white w-40 h-10 flex justify-center items-center rounded-full border border-blue-800 shadow-xl hover:bg-blue-900 transition-all cursor-pointer"> <i className="ri-arrow-go-forward-line "></i> &nbsp; Share now </li>
        
        <li className="list-none"><Link className="text-white text-xl" href="#"><i className="ri-facebook-line w-10 h-10 flex justify-center items-center bg-blue-700 rounded-full border border-blue-800 shadow-xl"></i></Link></li>
        <li className="list-none"><Link className="text-white text-xl" href="#"><i className="ri-instagram-line w-10 h-10 flex justify-center items-center bg-blue-700 rounded-full border border-blue-800 shadow-xl"></i></Link></li>
        <li className="list-none"><Link className="text-white text-xl" href="#"><i className="ri-github-line w-10 h-10 flex justify-center items-center bg-blue-700 rounded-full border border-blue-800 shadow-xl"></i></Link></li>
        <li className="list-none"><Link className="text-white text-xl" href="#"><i className="ri-twitter-line w-10 h-10 flex justify-center items-center bg-blue-700 rounded-full border border-blue-800 shadow-xl"></i></Link></li>
        <li className="list-none"><Link className="text-white text-xl" href="#"><i className="ri-linkedin-line w-10 h-10 flex justify-center items-center bg-blue-700 rounded-full border border-blue-800 shadow-xl"></i></Link></li>
      </ul>
  </div>


</div>
</div>
    </>
  )
}

export default BlogDetails
