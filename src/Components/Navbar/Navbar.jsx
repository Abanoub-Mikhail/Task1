import React, { useState } from 'react'
import './Navbar.css'
import prof from '../../Assets/team-4.jpg'
import logo from '../../Assets/download.png'
import { Link } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'

export default function Navbar() {

  function close (){
    setOpenMenu(false)
  }

  const [openMenu , setOpenMenu] = useState(false)
  const [openProfile , setOpenProfile] = useState(false)

  const mobile = window.innerWidth <= 992 ? true : false ;
  const mobile2 = window.innerWidth < 768 ? true : false ;
  

  return (
    <>
    <section className={`d-flex align-items-center p-3 position-relative justify-content-between nav container-fluid ${mobile2&&'bg-white d-flex align-items-center justify-content-between align-items-center px-4 p-3'}`}>
      {!mobile ? <div className="left">
      <h5 className='m-0 p-0'>Brand</h5>
      </div> : ''}
      <div className={`right d-flex align-items-center justify-content-between ${mobile? 'w-100' : ''}`}>

        {!mobile2&&<div className="search position-relative me-3">
          <input type="text" className=' form-control bg-transparent rounded-5 py-2' placeholder=' Search'/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>}

        {mobile2 && <div className=' toggle-nav' onClick={()=> setOpenMenu(true)} >
        <i className="fa-solid fa-bars text-dark h3 m-0 p-0 pointer"></i>
          </div>}

        {mobile2 && <div className='responsive-mobile'>
          <Link><img src={logo} alt="logo" className='w-100'/></Link>
          
          </div>}

        <div className="profile position-relative">
          <div className="hover d-flex align-items-center gap-1 pointer" onClick={()=>{!mobile2 && setOpenProfile(!openProfile)}}>
            {mobile2 && <div className='bell'>
            <i class="fa-solid fa-bell text-dark me-3 h4 m-0 p-0"></i>
              </div>}

            <img src={prof} alt="profile image" className=' rounded-circle' width={50} onClick={()=>{mobile2 && setOpenProfile(!openProfile)}} />
            {!mobile2 && <p className='m-0 text-capitalize'>jessica jones</p>}
            </div>
          {openProfile&&<div className="menu-profile position-absolute py-1">
            <p className='m-0 mb-1 px-3 pt-2'>welcome!</p>
            <Link className=' nav-link d-block m-0 p-0 text-dark text-capitalize py-2 px-3'><i class="fa-solid fa-user"></i> my profile</Link>
            <Link className=' nav-link d-block m-0 p-0 text-dark text-capitalize py-2 px-3'><i class="fa-solid fa-gear"></i> settings</Link>
            <Link className=' nav-link d-block m-0 p-0 text-dark text-capitalize py-2 px-3'><i class="fa-solid fa-calendar-days"></i> activity</Link>
            <hr className=' my-2' />
            <Link className=' nav-link d-block m-0 p-0 text-dark text-capitalize py-2 px-3'><i class="fa-solid fa-right-from-bracket"></i> logout</Link>
          </div>}
        </div>
      </div>
    </section>

    {openMenu && <MainNav display ={openMenu} open = {close}/>}
    </>
  )
}
