import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { Testimonials } from '../types'

interface TestimonialProps {
    Item: Testimonials
}

const Testimonial = ({Item}:(TestimonialProps)) => {
    return (
        <>
            <div className='p-5'>
                <div className='flex justify-center md:justify-start flex-col lg:flex-row items-center lg:items-start gap-5'>
                    <Image
                        src={Item.img}
                        width={64}
                        height={64}
                        alt='testimonial'
                        className='object-cover w-fit h-fit rounded-full'
                    />
                    <div>
                        <h1 className='text-[18px] font-bold text-[#202C45] text-center lg:text-left'> {Item.name} </h1>
                        <div className='flex gap-2 justify-center lg:justify-start'><FaQuoteLeft className='w-6 h-6 text-[#2291EA]'/> <p className=' text-[#444444]'>{Item.title}</p></div>
                        <p className='text-[#444444] text-center lg:text-left'>{Item.description}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial