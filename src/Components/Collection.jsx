import React from 'react'
import CollectionCard from './CollectionCard'
import { cafe, cricket, dinner, iftari } from '../Asset'
import { CollectionData } from '../Constant'

const Collection = () => {
  return (
    <section className='w-full h-10'>
      <div className='mx-36 pt-14'>
        <h2 className='text-[33px] font-Poppins'>Collection</h2>
      </div>
      <div className='mx-36 flex justify-between '>
        <p className=' font-Poppins '>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
        <a className='text-red-500' href="/">All collection in Mumbai </a>
      </div>


<div className='flex justify-center mt-8 gap-5' >
  {CollectionData.map(item =>(
 <CollectionCard 
 key={item.id}
image ={item.image}
title ={item.title}  
Desc={item.Desc}
  
  /> 

  ))}

</div>
    </section>
  )
}

export default Collection
