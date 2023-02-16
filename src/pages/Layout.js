import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
