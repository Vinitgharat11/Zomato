import React from 'react'

const Navbar = () => {
  return (
    <nav >
      <div className='flex justify-between font-Poppins  z-[1]'>
      <div className=' text-white mt-10 ml-40 relative z-[1]'>
      <p className=''>Get the App</p>
      </div>
      <div className='flex mr-10 text-white mt-10 gap-16 relative z-[1]'>
        <a className='' href="/">Investor Relation</a>
        <a className='' href="/">Add Restaurant</a>
        <a className=''href="/">Log in </a>
        <a className='' href="/">Sign up</a>
      </div>
      </div>
     
    </nav>
  )
}

export default Navbar
