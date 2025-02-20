'use client'
import Image from 'next/image'
import { Services } from "@/src/types";
import { useEffect, useState } from 'react';


interface dataProps {
  Item: Services
}



const Card = ({ Item }: dataProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {

    if (isModalOpen === true) {
      document.body.classList.add("overflow-hidden")
    }
    else {
      return document.body.classList.remove("overflow-hidden")
    }


  }, [isModalOpen])


  return (
    <>
      <div className='shadow-md rounded-xl overflow-hidden w-full bg-white transition-transform duration-300  hover:translate-y-[-10px]'>
        <Image src={Item.img} alt={Item.title} width={394.66} height={256} className='w-full h-auto object-cover cursor-pointer' onClick={openModal} />
      </div>


      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={closeModal}
        >
          <div className='relative max-w-4xl w-full p-4'>
            <Image
              src={Item.img}
              alt={Item.title}
              width={800}
              height={600}
              className='w-full h-auto object-cover'
            />
            <button
              className='absolute top-0 right-0 bg-white rounded-full p-2 shadow-lg w-10 h-10'
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

    </>
  )
}

export default Card