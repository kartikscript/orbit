import React from "react";
import Image from 'next/image'
export default function Hero(){
  return(
    <div className="w-10/12 texts-center mx-auto pt-10">
    <main className="flex  ">

      <div className=" pt-10">
      <h1 className="text-6xl select-none font-bold mb-5">Boost Your <br/>Customer<br/>Experience</h1>
      <p>we are dedicated to do this type of work no matter what comes <br/>in between us we just move on to our target</p>
      </div>
      <img src='/images/hero.png' className="w-5/12 ml-auto" loading="lazy" draggable='false' />
 
    </main>
    <div className="flex h-16 gap-10 justify-evenly mt-10  grayscale ">
    <img src='/icons/amazon.png' loading="lazy" draggable='false' />
    <img src='/icons/facebook.png'loading="lazy" draggable='false' />
    <img src='/icons/Google.png' loading="lazy" draggable='false' />
    <img src='/icons/Indeed.png' loading="lazy" draggable='false' />
    <img src='/icons/spotify.png'  loading="lazy" draggable='false' />


    </div>
    </div>
  )
}