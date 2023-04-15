import React from 'react'
import { Biryani, Brand_logo, Hero_image2, Rolls } from '../../Asset'
import Navbar from './Navbar'

const Header = () => {
  return (
    <section >
      <div className='bg w-full h-[60vh] object-fill'>
        <div className='flex justify-between font-Poppins  z-[1]'>
          <div className=' text-white mt-10 ml-40  z-[1]'>
            <p className=''>Get the App</p>
          </div>
          <div className='flex mr-10 text-white mt-10 gap-16  z-[1]'>
            <a className='' href="/">Investor Relation</a>
            <a className='' href="/">Add Restaurant</a>
            <a className='' href="/">Log in </a>
            <a className='' href="/">Sign up</a>
          </div>
        </div>

        {/* Brand Name and Slogan */}

        <div >
          <div className='flex  justify-center'>
          <p className='Brand_Name font-bold text-[70px]  text-white'>Zomat</p>
          </div>
          <div className='flex  justify-center'>
          <p className='font-bold text-[40px]  text-white'>Discover best Food and Drinks in Mumbai</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Header

