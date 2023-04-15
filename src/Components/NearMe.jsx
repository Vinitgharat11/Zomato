import React from 'react'
import According from './According'
import { Nearby } from '../Constant'

const NearMe = () => {
  return (
    <section className='h-full'>
      <div className=' flex ml-36 mt-10 font-Poppins text-[34px]'>
        <p>Explore options near me</p>
      </div>
      {/* According  */}
      <div className='m-10 ml-36'>
        {Nearby.map(item => (
          <According
            title={item.title}
            contain={item.contain}
          />
        ))}
      </div>
    </section>
  )
}

export default NearMe
