import React from 'react'
import FooterGrid from './FooterGrid'
import { FooterLink, FooterLink2 } from '../Constant'

const Footer = () => {
  return (
    <section className=' bg-zinc-100 w-full h-[20rem]'>
      <div className='flex justify-between'>
        <p className=' font-extrabold ml-28 mt-12 text-[30px]'>Zomatu</p>
        <div className='mt-12 mr-14 '>
          <select className='m-3 rounded w-[110px] text-center h-7 Nation'>
            <option value="">INDIA</option>
            <option value="">US</option>
          </select>
          <select className='m-3 rounded w-[110px] text-center h-7 Nation'>
            <option value="">ENG</option>
            <option value="">US</option>
          </select>
        </div>
      </div>
      {/* GRID  */}
      <div className='flex gap-16 ml-28 mt-5'>
      <div>
        {FooterLink.map(item => (
          <FooterGrid
            title={item.title}
          />
        ))}
      </div>
      <div>
        {FooterLink2.map(item => (
          <FooterGrid
            title={item.title}
          />
        ))}
      </div>
      <div>
        {FooterLink2.map(item => (
          <FooterGrid
            title={item.title}
          />
        ))}
      </div>
      </div>


    </section>
  )
}

export default Footer
