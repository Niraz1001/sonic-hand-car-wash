
import Card from '@/src/components/Card'
import { DetailsInfo } from '@/src/types'
import { Check, MapPin, HelpCircleIcon, } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { ServicesCard, TestimonialData } from '../constant'
import Testimonial from '@/src/components/Testimonial'
import Link from 'next/link'


const HomePage = () => {

  const Feature: DetailsInfo[] = [
    {
      Icon: <Check size={16} color="#2291EA" />,
      name: "Premium Service Guaranteed",
    },
    {
      Icon: <Check size={16} color="#2291EA" />,
      name: "Flexible Scheduling",
    },
    {
      Icon: <Check size={16} color="#2291EA" />,
      name: "Priority Lane Access",
    },
  ]


  const Exclusive: DetailsInfo[] = [
    {
      Icon: <Check size={16} color="white" />,
      name: "Up to 10 car washes per month",
      details: "Keep your vehicle spotless with regular washes",
    },
    {
      Icon: <Check size={16} color="white" />,
      name: "Priority service",
      details: "Skip the line with our VIP treatment",
    },
    {
      Icon: <Check size={16} color="white" />,
      name: "Premium detailing",
      details: "Complete interior & exterior care",
    },
    {
      Icon: <Check size={16} color="white" />,
      name: "Exclusive discounts",
      details: "Special rates on additional services",
    },
    {
      Icon: <Check size={16} color="white" />,
      name: "Hassle-free payments",
      details: "Automatic monthly billing system",
    },
  ]

  return (
    <div>

      {/* Hero Section*/}
      <div className='w-screen h-[200px] relative lg:h-[379.91px]'> {/* Set a fixed height */}
        <Image
          src={"/img/Bg.webp"}
          alt='HeroSectionImg'
          fill // Fills the container
          className='object-cover w-auto h-auto'
        />
      </div>

      {/*Box*/}

      <div className='bg-white mx-5 md:mx-5 lg:mx-12 p-5 rounded-md shadow-lg mt-[-25px] relative z-10'>
        <h1 className='text-[25px] md:text-[30px] lg:text-[48px] font-bold text-center mb-5 md:mb-9'>It’s time to <span style={{ color: "#2291EA" }}>Shine.</span></h1>
        <div className='container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-[55%_45%] md:gap-5 gap-3'>
          <div>
            <h4 className='text-[16px] md:text-[20px] lg:text-[24px] font-bold mb-2'>Sonic Hand Car Wash</h4>
            <div className='flex items-center gap-2 mb-5'>
              <MapPin size={16} color='black'/> <p className='text-[12px] md:text-[16px]'>Australia</p>
            </div>

            {
              Feature.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2 mt-2 text-[12px] md:text-[16px]'>
                  {item.Icon}<p>{item.name}</p>
                </div>
              ))
            }

          </div>

          <div>
            <div className='flex items-start gap-1 md:gap-3 mb-5 text-[12px] md:text-[16px]'>
              <p><HelpCircleIcon size={18} color='black' /></p>
              <div>
                <p className='leading-none'>Get $10.00 discount on every referral you make</p>
                <p className='my-5'>Hassle-free car care, great savings, and ultimate convenience.</p>
                <button className='bg-[#2291EA] px-3 md:px-10 py-2 rounded-lg mt-1 text-white'><Link href={"/about"}>Learn more →</Link></button>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Our services section */}

      <div className='container max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-10 md:py-16 '>
        <h4 className='text-center text-[25px] md:text-[32px] font-bold'>Our services</h4>
        <p className='mt-5 text-center text-[12px] md:text-[16px] px-5 md:px-5'>Experience premium car care services tailored to keep your vehicle looking its absolute best.</p>
        <div className='mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-5'>
          {
            ServicesCard.map((item, idx) => (
              <div key={idx}>
                <Card Item={item} />
              </div>
            ))
          }
        </div>

      </div>


      {/* Join Our Exclusive */}

      <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-10 md:py-16 text-[12px] md:text-[16px]'>
        <div className='bg-white max-w-4xl mx-auto p-5 lg:p-12 shadow-lg rounded-lg mt-5'>
          <h1 className='text-[25px] md:text-[32px] font-bold text-center'>JOIN OUR EXCLUSIVE SUBSCRIPTION PLAN!</h1>
          <p className='mt-5 text-center px-1 md:px-10 lg:px-20'>Enjoy premium car care services with our hassle-free monthly subscription. Get priority access, exclusive discounts, and up to 10 premium washes per month!</p>
          <div className='grid grid-cols-2 mt-12 gap-1 lg:gap-12'>

            <div>
              {
                Exclusive.slice(0, 3).map((item, idx) => (
                  <div key={idx}>
                    <div className='flex justify-start gap-2 lg:gap-5'>
                      <div className='bg-[#2291EA] p-[0px] md:p-[2px] rounded-full w-fit h-fit'>{item.Icon}</div>
                      <div className='mt-[-5px] mb-5 pr-5'>
                        <p className='text-[12px] md:text-[18px] font-semibold leading-4'> {item.name}</p>
                        <p className='text-[#4B5563]'>{item.details}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div>
              {
                Exclusive.slice(3, 5).map((item, idx) => (
                  <div key={idx}>
                    <div className='flex justify-start gap-2 lg:gap-5'>
                      <div className='bg-[#2291EA] p-[0px] md:p-[2px] rounded-full w-fit h-fit'>{item.Icon}</div>
                      <div className='mt-[-5px] mb-5 pr-5'>
                        <p className='text-[12px] md:text-[18px] font-semibold leading-4'> {item.name}</p>
                        <p className='text-[#4B5563]'>{item.details}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
              <button className='bg-[#2291EA] px-10 py-[14px] rounded-full mt-5 text-white'><Link href={"/about"}>Learn more →</Link> </button>
            </div>

          </div>
        </div>
      </div>

      {/* Testimonial Section */}

      <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-5 lg:py-16'>
        <h1 className='text-[25px] md:text-[36px]  font-bold text-center mb-16 '>Hear From Our Clients</h1>
        <div className='flex flex-col lg:flex-row gap-8 justify-center lg:justify-start items-center'>
        {
         TestimonialData.map((item, idx)=>(
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

export default HomePage