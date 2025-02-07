import React from 'react'

interface HeroSectionProps{
    img: string;
    tittle: string;
}


const HeroSection = ({img, tittle}: HeroSectionProps) => {


    return (
        <div
        className="relative w-full h-96 object-cover bg-no-repeat  bg-center"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl text-white font-semibold text-center">
            {tittle}
          </h1>
        </div>
      </div>
      
    )
}

export default HeroSection