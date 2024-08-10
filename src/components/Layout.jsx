import React from 'react'
import Header from './Header'
import { Outlet } from "react-router-dom"
import Footer from '../components/Footer'
import Track from './Track'

const Layout = () => {
  return (
    <div>
     <Header/>
      <Outlet />
      {/* <Track/> */}
      <Footer/>
    </div>
  )
}

export default Layout