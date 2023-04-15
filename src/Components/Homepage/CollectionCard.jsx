import React from 'react'
import { iftari } from '../../Asset'
import { CollectionData } from '../../Constant'

const CollectionCard = (props) => {
    return (
        <section className=' font-Poppins relative '>
            {/* {CollectionData.map(item => ( */}
                <div className=''>
                    <img className='w-[240] h-[350px] rounded-t-lg brightness-50' src={props.image} alt="" />
                </div>
            {/* ))} */}
            {/* {CollectionData.map(item => ( */}
                <div className=' absolute bottom-1 ml-3'>
                    <p className='text-white'>{props.title}</p>
                    <p className='text-white '>{props.Desc}</p>
                </div>
            {/* ))} */}
        </section>
    )
}

export default CollectionCard
