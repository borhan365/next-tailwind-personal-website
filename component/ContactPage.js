import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import Social from './Social';
import Title from './Title';

function ContactPage() {
  return (
    <>
      <section class="px-5 sm:px-10 pb-20 absolute left-0 sm:left-72 right-0 bg-gray-900 h-screen w-100">             

          {/* title */}
          <Title title="Contact " />

          {/* wrapper */}
          <div class="flex flex-col sm:flex-row justify-between items-start gap-4">

              {/* contact area */}
            <div class="p-5 sm:p-8 gap-4 bg-gray-800 rounded mt-2 w-full sm:w-2/5 h-full">
                <h2 class="text-white text-1xl font-bold">DON'T BE SHY !</h2>
                <h3 class="text-gray-300 text-md font-light mt-2 pb-2">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</h3>

                {/* mail */}
                <div class="flex justify-start items-center gap-4 w-full text-white mt-3">
                    <i class="p-3 rounded-full text-2xl bg-gray-900 w-16 h-16 flex justify-center items-center"><FiMail /></i>

                    <div>
                        <span class="uppercase text-gray-400 inline-block">Mail Me</span>
                        <p class="text-white-800 font-semibold text-md">info.mdborhan@gmail.com</p>
                    </div>
                </div>

                {/* call */}
                <div class="flex justify-start items-center gap-4 w-full text-white mt-3">
                    <i class="p-3 rounded-full text-2xl bg-gray-900 w-16 h-16 flex justify-center items-center"><FiPhoneCall /></i>

                    <div>
                        <span class="uppercase text-gray-400 inline-block">call me</span>
                        <p class="text-white-800 font-semibold text-md">+88-01818458934</p>
                    </div>
                </div>

              {/* social */}
              <Social />

            </div>

            {/* form area */}
            <form class="p-4 w-full gap-4 bg-gray-800 rounded mt-2 h-full" action="">
                <h2 class="text-white font-semibold capitalize text-2xl">Please fill out the form</h2>
                <div class="w-full mt-5 rounded bg-gray-800 flex justify-between gap-4">
                    <input class="w-full p-2 rounded font-normal" type="text" placeholder="Your name" />
                    <input class="w-full p-2 rounded" type="text" placeholder="Your email" />
                </div>
                <div class="mt-5">
                    <input class="w-full p-2 rounded" type="text" placeholder="Your subject" />
                </div>
                <div class="mt-5">
                    <textarea class="w-full rounded p-2" name="" id="" cols="30" rows="5" placeholder="Your message here..."></textarea>
                </div>
                <button class="bg-gray-900 py-2 px-10 rounded-full text-white shadow-xl border border-white-900 my-5">Submit</button>
            </form>
          </div>

          </section>
    </>
  )
}

export default ContactPage
