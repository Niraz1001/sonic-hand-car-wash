import { Clock, FacebookIcon, InstagramIcon, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { CustomerSupport, NavItems } from '../app/constant'
import Link from 'next/link'
import { DetailsInfo } from '../types'

export const Footer = () => {

  const DetailsInfo: DetailsInfo[] = [

    {
      Icon: <Phone size={16} color="white" />,
      name: "01-1534567 | 9808116740",
    },
    {
      Icon: <Mail size={16} color="white" />,
      name: "info@sonic.com",
    },
    {
      Icon: <Clock size={16} color="white" />,
      name: "Everyday, 8:00 - 6:00",

    },


  ];

  return (
    <div className='bg-black '>
      <div className='text-center sm:text-left max-w-7xl mx-auto px-5 md:px-8 lg:px-8 text-white pt-16 pb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div>
            <h4 className='text-[24px] font-bold'>Sonic Car Wash</h4>
            <p className='text-[14px] my-3'>Premium Car Wash & Detailing Services – Hassle-free car care with flexible plans.</p>
            <div className='flex items-center justify-center sm:justify-start gap-2'>
              <MapPin size={16} color='white' /><p>Australia</p></div>
          </div>
          <div>
            <h4 className='text-[18px] font-semibold mb-3'>Quick Link</h4>
            {
              NavItems.map((item, idx) => (
                <div key={idx} className='mb-2 '>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </div>
              ))
            }
          </div>
          <div>
            <h4 className='text-[18px] font-semibold mb-3'>Customer Support</h4>
            {
              CustomerSupport.map((item, idx) => (
                <div key={idx} className='mb-2 '>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </div>
              ))
            }

            <h4 className='text-[18px] font-semibold mb-3 mt-14'>Contact Details</h4>
            {
              DetailsInfo.map((item, idx) => (
                <div key={idx} className='flex items-center justify-center sm:justify-start gap-2'>
                  <p className='mb-2'>{item.Icon}</p>
                  <p className='mb-2'>
                    {item.name}
                  </p>
                </div>
              ))
            }

          </div>
          <div>
            <h4 className='text-[18px] font-semibold mb-3'>Join Our Exclusive Subscription Plan! </h4>
            <p className='text-[14px] my-3'>Get 10 premium car washes every month with priority access and exclusive benefits.</p>
            <button className='bg-[#2291EA] px-6 py-[6px] rounded-lg mt-1'>Get Subscription</button>
            <h4 className='text-[18px] font-semibold mb-3 mt-5'>Stay Updated!</h4>
            <p className='text-[14px] my-3'>Subscribe to receive special offers and car care tips.</p>

            <div className='relative'>
              <input
                type="email"
                placeholder="Enter your email"
                className=" px-4 py-2 text-gray-700 outline-none w-full rounded-lg"
                required

              />
              <button
                type="submit"
                className="absolute ml-[-100px] bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition rounded-r-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className='mt-8 pb-8' />
        <div className='flex justify-between'>
          <p>© 2025 Sonic Hand Car Wash. All Rights Reserved.</p>
          <div className='flex items-center gap-5'>
            <FacebookIcon size={16} color='white' />
            <InstagramIcon size={16} color='white' />
            <Twitter size={16} color='white' />
            <Linkedin size={16} color='white' />
          </div>
        </div>
      </div>
    </div>

  )
}
