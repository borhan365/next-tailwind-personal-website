import React from 'react'
import AboutPage from '../component/AboutPage'
import Sidebar from '../component/Sidebar'
import MobileMenu from '../component/MobileMenu'

function about() {
  return (
    <>
      <MobileMenu />
      <Sidebar />
      <AboutPage />
    </>
  )
}

export default about
