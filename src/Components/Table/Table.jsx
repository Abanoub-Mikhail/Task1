import React from 'react'
import './Table.css'

export default function Table({name}) {
  return (
    <>
    
    <section className='table-section  rounded-3 '> 
      <h3 className=' text-capitalize border-bottom p-3 m-0'>{name}</h3>
      <div className=' overflow-x-auto w-100 d-inline-block mb-3'>
      <table className=" table-reponsive">
  <thead >
    <tr >
      <th >project</th>
      <th >budget</th>
      <th >status</th>
      <th >users</th>
      <th >completion</th>
      <th ></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className=' d-flex align-items-center gap-3'><div className="img"></div> <p className='m-0'>Argon Design System</p></td>
      <td className='budget'>$2,500 USD</td>
      <td className='status'><span><i className='dot bg-warning'></i> pending</span></td>
      <td className=' budget'>test</td>
      <td className='completion'>
        <div className=' d-flex align-items-center gap-2 w-100 d-inline-block'>
        <span>60%</span>
        <div className="progress-ba position-relative w-100">
          <span className=' position-absolute bg-warning'></span>
        </div>
        </div>
        </td>
      <td className=' dots text-center'><i class="fa-solid fa-ellipsis-vertical"></i></td>
    </tr>
    <tr>
      <td className=' d-flex align-items-center gap-3'><div className="img"></div> <p className='m-0'>Angular Now UI Kit PRO</p></td>
      <td className='budget'>$1,800 USD</td>
      <td className='status'><span><i className='dot bg-success'></i> completed</span></td>
      <td className=' budget'>test</td>
      <td className='completion'>
        <div className=' d-flex align-items-center gap-2 w-100 d-inline-block'>
        <span>100%</span>
        <div className="progress-ba position-relative w-100">
          <span className=' position-absolute bg-success w-100'></span>
        </div>
        </div>
        </td>
      <td className=' dots text-center'><i class="fa-solid fa-ellipsis-vertical"></i></td>
    </tr>
    <tr>
      <td className=' d-flex align-items-center gap-3'><div className="img"></div> <p className='m-0'>Black Dashboard</p></td>
      <td className='budget'>$3,150 USD</td>
      <td className='status'><span><i className='dot bg-danger'></i> delayed</span></td>
      <td className=' budget'>test</td>
      <td className='completion'>
        <div className=' d-flex align-items-center gap-2 w-100 d-inline-block'>
        <span>75%</span>
        <div className="progress-ba position-relative w-100">
          <span className=' position-absolute w-75'></span>
        </div>
        </div>
        </td>
      <td className=' dots text-center'><i class="fa-solid fa-ellipsis-vertical"></i></td>
    </tr>
    <tr>
      <td className=' d-flex align-items-center gap-3'><div className="img"></div> <p className='m-0'>React Material Dashboard</p></td>
      <td className='budget'>$4,400 USD</td>
      <td className='status'><span><i className='dot bg-primary'></i> on schedule</span></td>
      <td className=' budget'>test</td>
      <td className='completion'>
        <div className=' d-flex align-items-center gap-2 w-100 d-inline-block'>
        <span>90%</span>
        <div className="progress-ba position-relative w-100">
          <span className=' position-absolute bg-primary'></span>
        </div>
        </div>
        </td>
      <td className=' dots text-center'><i class="fa-solid fa-ellipsis-vertical"></i></td>
    </tr>
    <tr>
      <td className=' d-flex align-items-center gap-3'><div className="img"></div> <p className='m-0'>Vue Paper UI Kit PRO</p></td>
      <td className='budget'>$2,200 USD</td>
      <td className='status'><span><i className='dot bg-success'></i> completed</span></td>
      <td className=' budget'>test</td>
      <td className='completion'>
        <div className=' d-flex align-items-center gap-2 w-100 d-inline-block'>
        <span>100%</span>
        <div className="progress-ba position-relative w-100">
          <span className=' position-absolute bg-success w-100'></span>
        </div>
        </div>
        </td>
      <td className=' dots text-center'><i class="fa-solid fa-ellipsis-vertical"></i></td>
    </tr>
  </tbody>
</table>
      </div>
    <div className="pages d-flex align-items-center gap-2 d-inline-block ms-auto mb-3 ">
      <div className="page p-2 d-flex justify-content-center align-items-center border rounded-circle">
        <span><i class="fa-solid fa-angle-left"></i></span>
      </div>
      <div className="page p-2 d-flex justify-content-center align-items-center border rounded-circle pointer active-page">
        <span>1</span>
      </div>
      <div className="page p-2 d-flex justify-content-center align-items-center border rounded-circle pointer">
        <span>2</span>
      </div>
      <div className="page p-2 d-flex justify-content-center align-items-center border rounded-circle pointer">
        <span>3</span>
      </div>
      <div className="page p-2 d-flex justify-content-center align-items-center border rounded-circle pointer">
        <span><i class="fa-solid fa-angle-right"></i></span>
      </div>
    </div>
    </section>
    

    </>
  )
}
