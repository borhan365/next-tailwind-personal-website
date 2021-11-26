import React from 'react'
import Sidebar from '../component/Sidebar'
import ContactPage from '../component/ContactPage'
import MobileMenu from '../component/MobileMenu'

function contact() {
  return (
    <>
      <MobileMenu />
      <Sidebar />
      <ContactPage />
    </>
  )
}

export default contact
