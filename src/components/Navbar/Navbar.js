import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='todo_main'>
        <div className='left_side'>
            <span>TODOLIST</span>
        </div>
        <div className='right_side'>
            <span>DAY : </span>
            <span>TIME : </span>
        </div>
    </div>
  )
}

export default Navbar