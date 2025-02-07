import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5';
import { SubscriptionPlans } from '../types';

interface PlanProps {
    item: SubscriptionPlans
}

const SubscriptionPlan = ({ item }: PlanProps) => {

    return (

        <div className={`p-8 shadow-sm rounded-xl transition-transform duration-300  hover:translate-y-[-10px] ${item.isPopular ? "bg-[#EFF6FF] border-[3px] border-[#2291EA] mt-2 mb-2 lg:mb-0 lg:mt-[-20px]" : "bg-white border-[2px] border-[#E5E7EB]"}`}>
            {
                item.isPopular && <button className='bg-[#2291EA] py-3 px-8 text-white rounded-full'>Most Popular</button>
            }

            <h4 className='text-xl md:text-[24px] font-bold my-5'>{item.title}</h4>
            <p className='text-3xl md:text-[36px] font-bold mb-5'>${item.price} <span className='text-[18px] text-[#4B5563]'>/month</span></p>
            <div className='flex flex-col gap-2 h-36'>
                {
                    item.features.map((item, idx) => (
                        <div key={idx} className='flex items-center'><IoCheckmarkOutline size={16} color='#2291EA' className='mr-1 text-sm md:text-base' /><p>{item}</p></div>
                    ))
                }

            </div>

        </div>

    )
}

export default SubscriptionPlan