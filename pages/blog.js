import React from 'react'
import BlogPage from '../component/BlogPage'
import Sidebar from '../component/Sidebar'
import MobileMenu from '../component/MobileMenu'

function blog() {
  return (
    <>
      <MobileMenu />
      <Sidebar />
      <BlogPage />
    </>
  )
}

export default blog
