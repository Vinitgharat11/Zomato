import React from 'react'
import Card from './Card'
import { Dinning, Food, party } from '../Asset'

const Categories = () => {
  return (
    <div className='flex gap-5 justify-center pt-10'>
      <Card img={Food} title="Order Online"
      description='Stay Home And Order to Your Doorsteps'/>
      <Card img={Dinning} title="Dining"
      description='View the city beautifull dinning menu'/>
      <Card img={party} title="Nightlife and Clubs"
      description='explore the city nightlife outlays'/>
    </div>
  )
}

export default Categories
