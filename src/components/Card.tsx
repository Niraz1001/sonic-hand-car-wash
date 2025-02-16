import Image from 'next/image'
import React from 'react'
import {Services } from "@/src/types";


 interface dataProps{
    Item: Services
 }

const Card = ({Item}: dataProps) => {
  return (
    <>
    <div className='shadow-md rounded-xl overflow-hidden w-full bg-white transition-transform duration-300  hover:translate-y-[-10px]'>
        <Image src={Item.img} alt={Item.title} width={394.66} height={256} className='w-full h-auto object-cover'/>
        {/* <div className='p-10'>
        <h4 className='text-[16px] md:text-2xl font-bold  text-[#0B0B0B]'>{Item.title}</h4>
            <p className='text-[#0B0B0B] my-3 md:my-7 text-[12px] md:text-[16px] h-[70px]'>{Item.description}</p>
            <p className='text-[#2291EA] text-[18px] md:text-2xl font-bold'>{Item.price}</p>
        </div> */}
    </div>
    </>
  )
}

export default Card