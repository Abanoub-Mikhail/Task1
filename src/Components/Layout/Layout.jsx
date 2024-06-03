import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>

      <MainNav/>
      <div className="main-content">
      <Navbar/>
        <div className="bg-gradient position-absolute"></div>
      <div className='outlet px-5'><Outlet/>
      
      <Footer/>
      </div>
      
      </div>
      
    </>
  )
} 
