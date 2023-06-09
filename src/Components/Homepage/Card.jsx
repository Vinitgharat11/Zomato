import React from 'react'
import { Dosa, Food } from '../../Asset'

const Card = (props) => {
  return (
    <section className='card font-Poppins '>
        <div className=''>
          <img className='food h-52  ' src={props.img} alt="" />
        </div>
        <div className='ml-3 pt-1'>
          <h4 className='text-[20px]'>
            {props.title}
          </h4>
        </div>
        <div className='ml-3'>
          <h6 className='text-[15px]'>
            {props.description}
          </h6>
        </div>

    </section>
  )
}

export default Card
