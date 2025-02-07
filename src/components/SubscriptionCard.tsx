import React from 'react'
import { SubscriptionCards } from '../types'

interface subscriptionprops {
    item: SubscriptionCards
}

const SubscriptionCard = ({item}: subscriptionprops) => {



  return (
    <div className='bg-white rounded-2xl p-5 transition-transform duration-300  hover:translate-y-[-10px]'>
        <div  className='text-[#2291EA]'>{item.icon}</div>
        <h4 className='text-base md:text-xl md:text-[20px] font-bold my-2'>{item.title}</h4>
        <p className='text-sm md:text-[16px] text-[#4B5563]'>{item.description}</p>
    </div>
  )
}

export default SubscriptionCard