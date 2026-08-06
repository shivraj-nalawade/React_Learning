import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
          <h2 className='bg-white h-12 w-12 text-xl font-bold rounded-full flex justify-center items-center'>{props.id+1}</h2>
          <div>
            <p className='text-xl leading-relaxed text-white mb-14 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis dolorem eaque aliquid sint culpa.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>
                    {props.tag}
                </button>
                <button className='bg-blue-700  text-white font-medium px-4 py-2 rounded-full'>
                    <ArrowRight />
                </button>
            </div>
          </div>
    </div>
  )
}

export default RightCardContent
