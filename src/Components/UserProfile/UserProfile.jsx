import React from 'react'
import profile from '../../Assets/team-4.jpg'
import './UserProfile.css'
import { NavLink, Outlet } from 'react-router-dom'


export default function UserProfile() {
  return (
    <>
      <section className=' user-profile position-relative bg-white z-1 rounded-3 shadow-sm pb-3 '>
        <div className="header text-center pb-4 border-bottom mb-4">
          <div className="image ">
            <img src={profile} alt="profile image" className=' rounded-circle' width={200}/>
          </div>
          <p className=' text-uppercase'>user 1</p>
          <div className="tabs d-flex align-items-center gap-3 justify-content-center mb-4">
            <NavLink className={({ isActive }) => isActive ? 'active link text-capitalize' : 'link text-capitalize'} to={'/user-profile/tasks'}>tasks</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active link text-capitalize' : 'link text-capitalize'} to={'/user-profile/records'}>records</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active link text-capitalize' : 'link text-capitalize'} to={'/user-profile/commits'}>commits</NavLink>
          </div>
        </div>
        <div className="tbl px-5">
          <Outlet/>
        </div>
      </section>
      
    </>
  )
}
