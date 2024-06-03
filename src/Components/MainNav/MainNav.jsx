import React from 'react'
import logo from '../../Assets/download.png'
import './MainNav.css'
import { Link } from 'react-router-dom';

export default function MainNav({display , open}) {

  const mobile = window.innerWidth < 768 ? true : false ;

  return (
    <>
    

    <nav className={`navbar navbar-expand-lg main-nav ${display?'d-block' :' '} `}>
  <div className="flex-column d-block">
    <div className='bord d-flex justify-content-between align-items-center'>
    <Link className="navbar-brand" href="#">
      <img src={logo} alt="logo" className=' w-100 pt-2' />
    </Link>
    {mobile &&<i class="fa-solid fa-xmark pointer h3 p-0 m-0" onClick={open}></i>}
    </div>
    
    <div className={` ${mobile?'mt-4' : 'mt-5'}`} >
      {mobile&&<div className="search position-relative mb-3">
          <input type="text" className=' form-control bg-transparent rounded-5 py-2' placeholder=' Search'/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>}
      <ul className="navbar-nav mb-2 mb-lg-0 flex-column w-100">
        <li className="nav-item ">
          <Link className="nav-link p-0 text-capitalize py-2 d-flex align-items-center" aria-current="page"><span><i className="fa-solid fa-chart-line" style={{color: '#5e72e4'}}></i></span>dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-0 text-capitalize py-2 d-flex align-items-center" aria-current="page"><span><i class="fa-solid fa-rss" style={{color: '#ff0000'}}></i></span>feed</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link p-0 text-capitalize py-2" aria-current="page"><span><i class="fa-solid fa-file-export" style={{color: '#2ed1a0'}}></i></span>records</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link p-0 text-capitalize py-2" aria-current="page"><span><i class="fa-solid fa-list-check" style={{color: '#5603ad'}}></i></span>tasks</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link p-0 text-capitalize py-2" aria-current="page"><span><i class="fa-brands fa-gitlab text-orange" style={{color: '#fb6340'}}></i></span>commits</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link p-0 text-capitalize py-2" aria-current="page"><span><i class="fa-solid fa-user" style={{color: '#8965e0'}}></i></span>users</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link p-0 text-capitalize py-2" aria-current="page"><span><i class="fa-solid fa-gear" style={{color: '#ffd600'}}></i></span>settings</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
} 
