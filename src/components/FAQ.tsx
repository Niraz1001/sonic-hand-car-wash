import React from 'react'
import { Faq } from '../types'

interface FaqProps {
    item: Faq
}

const FAQ = ({item}: FaqProps) => {
  return (
    <div className='bg-white py-3 px-5 md:px-10 md:py-7 shadow-lg rounded-md '>
        <h4 className='text-[14px] md:text-[20px] font-bold '>{item.title}</h4>
        <p className='text-[12px] md:text-[16px]'>{item.des}</p>
    </div>
  )
}

export default FAQ