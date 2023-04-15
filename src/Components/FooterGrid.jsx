import React from 'react'
import { FooterLink } from '../Constant'

const FooterGrid = (props) => {
  return (
    <section>
 <div className="flex gap-10">
 <div className='grid'>
     <a href="">{props.title}</a>
 </div>
</div>
    </section>
  )
}

export default FooterGrid
