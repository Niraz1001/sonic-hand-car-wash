'use client'
import { Clock, FacebookIcon, InstagramIcon, Mail, MapPin, Phone, } from 'lucide-react'
import React, { useState } from 'react'
import { CustomerSupport, NavItems } from '../app/constant'
import Link from 'next/link'
import { DetailsInfo } from '../types'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { FaFacebookF } from 'react-icons/fa'
import { BsTiktok } from 'react-icons/bs'

export const Footer = () => {

  const [IsOpenQuick, setIsOpenQuick] = useState(false)
  const [IsOpenSupport, setIsOpenSupport] = useState(false)


  const DetailsInfo: DetailsInfo[] = [

    {
      Icon: <Phone size={16} color="white" />,
      name: "0451536520",
    },
    {
      Icon: <Mail size={16} color="white" />,
      name: "admin@sonichandcarwash.com",
    },
    {
      Icon: <Clock size={16} color="white" />,
      name: "Everyday, 9am-5pm",

    },


  ];

  return (
    <div className='bg-black '>
      <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 text-white pt-16 pb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div>
            <h4 className='text-[24px] font-bold text-center lg:text-left md:text-left '>Sonic Car Wash</h4>
            <p className='text-[14px] my-3 text-center lg:text-left md:text-left'>Premium Car Wash & Detailing Services – Hassle-free car care with flexible plans.</p>
            <div className='hidden md:flex items-center gap-2'>
              <MapPin size={16} color='white' /><p>Australia</p></div>
          </div>
          <div>

            <div className='flex justify-between items-start'>
              <h4 className='text-[18px] font-semibold mb-3'>Quick Link </h4>
              {
                IsOpenQuick ? <RiArrowDropUpLine className='md:hidden lg:hidden inline text-right text-4xl mt-[-10px]' onClick={() => (setIsOpenQuick(!IsOpenQuick))} /> : <RiArrowDropDownLine className='md:hidden lg:hidden inline text-right text-4xl mt-[-10px]' onClick={() => (setIsOpenQuick(!IsOpenQuick))} />
              }

            </div>
            <hr className='md:hidden lg:hidden border-[#1A222C] mb-5' />

            <div className='hidden md:block'>
              {
                NavItems.map((item, idx) => (
                  <div key={idx} className='mb-5 md:mb-2 '>
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                  </div>
                ))
              }
            </div>

            {/* mobile view nav */}
            {
              IsOpenQuick &&
              <div>
                {
                  NavItems.map((item, idx) => (
                    <div key={idx} className='mb-5 md:mb-2 text-[#9CA3AF]'>
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </div>
                  ))
                }
              </div>
            }


          </div>
          <div>
            <div className='flex justify-between items-start mt-[-40px] lg:mt-0 '>
              <h4 className='text-[18px] font-semibold mb-3'>Customer Support </h4>
              {
                IsOpenSupport ? <RiArrowDropUpLine className='md:hidden lg:hidden inline text-right text-4xl mt-[-10px]' onClick={() => (setIsOpenSupport(!IsOpenSupport))} /> : <RiArrowDropDownLine className='md:hidden lg:hidden inline text-right text-4xl mt-[-10px]' onClick={() => (setIsOpenSupport(!IsOpenSupport))} />
              }

            </div>
            <hr className='md:hidden lg:hidden border-[#1A222C] mb-5' />

            <div className='hidden md:block'>
              {
                CustomerSupport.map((item, idx) => (
                  <div key={idx} className='mb-2 '>
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                  </div>
                ))
              }
            </div>

            {/* mobile view nav support */}
            {
              IsOpenSupport &&
              <div>
                {
                  CustomerSupport.map((item, idx) => (
                    <div key={idx} className='mb-5 md:mb-2 text-[#9CA3AF]'>
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </div>
                  ))
                }
              </div>
            }

            <div className='hidden md:block'>
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

          </div>
          <div className='hidden md:block'>
            <h4 className='text-[18px] font-semibold mb-3'>Join Our Exclusive Subscription Plan! </h4>
            <p className='text-[14px] my-3'>Get $10.00 discount on every referral you make</p>
            <button className='bg-[#2291EA] px-6 py-[6px] rounded-lg mt-1'><Link href={"/subscriptions"}>Get Subscription</Link></button>
          </div>
        </div>
        <hr className='hidden md:block mt-8 pb-8' />
        {/* Destop view */}
        <div className='hidden md:flex justify-between items-start'>
          <p className='text-xs md:text-base'>© 2025 Sonic Hand Car Wash. All Rights Reserved. Designed by <a href='https://neomatrix.live/'>NeoMatrix</a></p>
          <div className='flex items-center gap-5'>
            <a href='https://www.facebook.com/profile.php?id=61571553969247' target="_blank"> <FacebookIcon size={16} color='white' /> </a>
            <a href='https://www.instagram.com/sonichandcarwash' target="_blank">  <InstagramIcon size={16} color='white' /> </a>
            <a href='https://www.tiktok.com/@sonichandcarwash' target="_blank"><BsTiktok size={16} color='white' /> </a>
          </div>
        </div>

        {/* Mobile view */}

        <div className='lg:hidden md:hidden'>
          <div className='flex items-center justify-center gap-5 my-8'>
            <a href='https://www.facebook.com/profile.php?id=61571553969247' target="_blank"> <FaFacebookF size={30} color='black' className='bg-white rounded-full p-1 ' /> </a>
            <a href='https://www.instagram.com/sonichandcarwash' target="_blank">  <InstagramIcon size={30} color='black' className='bg-white rounded-full p-1' /> </a>
            <a href='https://www.tiktok.com/@sonichandcarwash' target="_blank"> <BsTiktok size={30} color='black' className='bg-white rounded-full p-1' /> </a>
          </div>
          <p className='text-xs text-center'>© 2025 Sonic Hand Car Wash. All Rights Reserved. Designed by <a href='https://neomatrix.live/'>NeoMatrix</a></p>
        </div>
      </div>

    </div>


  )
}
