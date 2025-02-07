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
            <div className='p-0 pb-5  lg:p-5'>
                <div className='flex justify-center md:justify-start flex-col lg:flex-row items-center lg:items-start gap-5'>
                    <Image
                        src={Item.img}
                        width={100}
                        height={100}
                        alt='testimonial'
                        className='object-cover w-fit h-fit rounded-full'
                    />
                    <div>
                        <h1 className='text-[16px] lg:text-lg font-bold text-[#202C45] text-center lg:text-left'> {Item.name} </h1>
                        <div className='flex gap-2 justify-center lg:justify-start my-2 lg:my-0 text-[14px] lg:text-base'><FaQuoteLeft className='w-3 h-4 lg:w-6 lg:h-6 text-[#2291EA]'/> <p className=' text-[#444444]'>{Item.title}</p></div>
                        <p className='text-[#444444] text-center lg:text-left text-[12px] md:text-base'>{Item.description}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial