import React from 'react'
import Link from 'next/link'
import SocialIcons from './Data/SocialIcons'

function Social() {
  return (
    <>
      <div className="header-footer-area">
          <ul className="flex justify-center ml-3 mt-10 gap-4">
            {
              SocialIcons.map((item, index) => (
                <li key={index} className="list-none">
                  <Link href={item.url}>
                    <a target="_blank">
                    <span className="text-white hover:text-green-500 cursor-pointer text-xl">{item.icon}</span>
                    </a>
                    </Link>
                </li>
              ))
            }           
            
          </ul>
      </div>
    </>
  )
}

export default Social
