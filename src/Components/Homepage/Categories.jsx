import React from 'react'
import Card from '../Homepage/Card'
import { Dinning, Food, party } from '../../Asset'
import { CollectionData, Features } from '../../Constant'

const Categories = () => {
  return (
    <div className='flex gap-9 justify-center'>
 {Features.map(item => (
    <div className='flex gap-5  pt-10'>
      <Card key={item.id} img={item.img} title={item.title}
      description={item.desc}/>
    </div>
     ))}
      </div>
  )
}

export default Categories
