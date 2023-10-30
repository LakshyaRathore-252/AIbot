import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-10 bg-[#ff4820]'>
      <div>
        <Link className='text-xl text-white' to='/'>Chatbot</Link>
      </div>

      <div>
        <Link className='text-xl text-white' to='/auth' >Admin Panel</Link>
      </div>
    </div>
  )
}

export default Navbar