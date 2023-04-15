import React from 'react'
import Locations from './Locations'
import { PopLocation } from '../../Constant'

const PopularLocation = () => {
  return (
    <section className='mx-36 pt-20'>
      <div>
        <p className=' font-Poppins text-[34px]'>Popular localities in and around <span className='font-bold'>Mumbai</span></p>
      </div>
      <div className='grid grid-cols-3'>
        {PopLocation.map(item => (
          <Locations
            title={item.title}
            result={item.result}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularLocation
