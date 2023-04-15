import React from 'react'

const Locations = (props) => {
  return (
    <div>
      <div className=' pt-10 w-full  '> 
        <div  className='container location w-[350px] h-16  '>
          <p className=' font-medium text-[25px] pl-5'>{props.title}</p>
          <p className=' font-Poppins text-[15px] pl-5'>{props.result}</p>
        </div>
      </div>
    </div>
  )
}

export default Locations
