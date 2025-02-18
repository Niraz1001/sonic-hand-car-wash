import HeroSection from '@/src/components/Herosection'
import SubscriptionCard from '@/src/components/SubscriptionCard'
import { SubscriptionCards } from '@/src/types'
import React from 'react'
import { BsPatchQuestion } from 'react-icons/bs'
import { FaCar, FaCrown, } from 'react-icons/fa'


const Subscriptions = () => {

  const SubscriptionCardData: SubscriptionCards[] = [
    {
      icon: <FaCar size={40}/>,
      title: "Up to 10 Car Washes Per Month",
      description: "Keep your car spotless with regular washes. at your convenience."
    },
    {
      icon: <FaCrown size={40}/>,
      title: "Priority Service",
      description: "Skip the line and enjoy VIP treatment every. time you visit.."
    },
    {
      icon: <BsPatchQuestion size={40}/>,
      title: "Premium Detailing",
      description: "Interior & exterior cleaning for a showroom finish."
    },

  ]

  return (
    <div>
      <HeroSection img={"/img/subscription.webp"} tittle={"About Sonic Hand Car Wash"} />

      {/* Subscription card */}
      <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-16'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8'>
          {
            SubscriptionCardData.map((item, idx) => (
              <div key={idx}>
                <SubscriptionCard item={item} />
              </div>
            ))
          }
        </div>
      </div>

      {/* Subscription plan */}
          <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-0 md:py-16 '>
              <h4 className='text-center text-xl md:text-[36px] font-bold'> Subscription Plan</h4>
              <p className='text-center text-[24px] text-[#4B5563] mb-16 mt-3'>Stay tuned for subscription plans</p>
              {/* <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5'>
                  {
                    SubscriptionPlanData.map((item,idx)=>(
                      <div key={idx}>
                        <SubscriptionPlan item={item}/> 
                      </div>
                    ))
                  }
              </div> */}

                  <h4 className='text-2xl text-center'></h4>

          </div>
    </div>
  )
}

export default Subscriptions