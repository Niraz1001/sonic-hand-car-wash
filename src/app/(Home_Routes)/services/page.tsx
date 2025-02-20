import HeroSection from '@/src/components/Herosection'
import React from 'react'
import { ServicesCard, TestimonialData } from '../../constant'
import Card from '@/src/components/Card'
import Testimonial from '@/src/components/Testimonial'

const Services = () => {
  return (
    <div>
      <HeroSection img={"/img/services.webp"} tittle={"About Sonic Hand Car Wash"} />

      {/* Our services section */}

      <div className='container max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-10 md:py-16 '>
        <h4 className='text-center text-[25px] md:text-[32px] font-bold'>Our services</h4>
        <p className='mt-5 text-center text-[12px] md:text-[16px] px-5 md:px-5'>Experience premium car care services tailored to keep your vehicle looking its absolute best.</p>
        <div className='mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-5'>
          {
            ServicesCard.map((item, idx) => (
              <div key={idx}>
                <Card Item={item} />
              </div>
            ))
          }
        </div>
      </div>


      {/* Testimonial Section */}

      <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-5 lg:py-16'>
        <h1 className='text-[25px] md:text-[36px]  font-bold text-center mb-16 '>Hear From Our Clients</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8'>
          {
            TestimonialData.map((item, idx) => (
              <div key={idx}>
                <Testimonial Item={item} />
              </div>
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default Services