import HeroSection from '@/src/components/Herosection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <HeroSection img={"/img/about.webp"} tittle={"About Sonic Hand Car Wash"} />

      {/* About Section */}
      <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-10 lg:py-16 flex flex-col justify-center items-center gap-10'>
        <Image src={"/img/logo.webp"} width={91} height={39} alt='logo' />
        <p className='max-w-[601px] mx-auto text-center text-sm lg:text-base'>At Sonic Hand Car Wash, we believe that every vehicle deserves meticulous care. Founded in 2015, our team has been dedicated to providing hand-crafted washing techniques that ensure every inch of your car shines.</p>
      </div>

      {/* Our Story Section */}

      <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 pb-16'>
        <div className=' max-w-4xl mx-auto bg-white py-5 px-5 lg:px-10 lg:py-16 gap-10 rounded-2xl flex flex-col lg:flex-row items-center '>
          <Image src={"/img/our story.webp"} alt='img' height={352} width={352} className='shadow-lg rounded-2xl' />
          <div>
            <h4 className='text-2xl lg:text-[32px] font-bold  mb-4 lg:mb-7 text-center lg:text-left'>Our Story</h4>
            <p className='text-sm lg:text-[18px] text-[#4B5563] mb-5'>Founded in 2015, Sonic Hand Car Wash started as a small family business with a passion for cars and customer service. Over the years, we have grown into a trusted name, offering premium hand washes and eco-friendly cleaning solutions.</p>
            <p className='text-sm lg:text-[18px] text-[#4B5563]' >Our mission is simple: provide top-tier car care with a focus on quality, convenience, and sustainability.</p>
          </div>
        </div>
      </div>

      {/* Customer rate */}

      <div className='bg-[#2291EA] py-10 my-5'>
        <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8'>
          <div className='flex justify-between items-center text-white'>

            <div>
              <h4 className='text-center text-lg md:text-[36px] font-bold md:mb-5'>10,000+</h4>
              <p className='text-xs md:text-[20px] text-center'>Happy Customers Served</p>
            </div>

            <div >
              <h4 className='text-center text-lg md:text-[36px] font-bold md:mb-5'>99%</h4>
              <p className='text-xs md:text-[20px] text-center'>Customer Satisfaction Rate</p>
            </div>

            <div>
              <h4 className='text-center text-lg md:text-[36px] font-bold md:mb-5' >1M+</h4>
              <p className='text-xs md:text-[20px] text-center'>Liters of Water Saved</p>
            </div>

          </div>
        </div>
      </div>

      {/*get in touch Section*/}
          <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-16 text-center'>
              <h4 className='text-base md:text-[30px] text-[#2291EA] font-bold'>Ready to give your car the shine it deserves?</h4>
              <p className='my-3 md:my-7 text-base md:text-[30px] text-[#4B5563]'>Get in touch with us today</p>
              <button className='bg-[#2291EA] py-1 px-4 md:py-3 md:px-8 text-sm md:text-[18px] rounded-full text-white'><Link href={"/enquiry"}>Contact Us</Link></button>
          </div>
    </div>
  )
}

export default About