import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className='footer py-5 px-2 d-flex justify-content-between align-items-center mt-5 flex-wrap'>

    <p className='m-0'>© 2024 <span><Link>Capacity</Link></span></p>
    <h4 className='m-0'><Link>Hexaworks</Link></h4>
    </footer>
    
    </>
  )
}
 