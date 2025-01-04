"use client"

import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../redux/slice/popupSlice';
import Link from 'next/link';

const HeroSection = () => {
  const dispatch = useDispatch();
  const handleOpen = () => (
    dispatch(openModal())
  )
    return (
        <>
            <div className="relative md:h-[30vw] max-md:h-[36vh] text-white overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src="/images/herosection.jpg"
                  alt="Background Image"
                  fill
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-[#00000050]" />
              </div>
              <div className="relative max-w-6xl mx-auto z-10 flex flex-col items-center justify-center h-full text-center max-md:px-2">
                <div className="font-medium md:text-center max-md:text-center">
                  <p className="font-[500] md:text-[18px] max-md:text-[16px] text-[#fff]">We make you happy</p>
                  <p className="text-[#f5880c] md:text-[60px] max-md:text-[26px] font-[800]">Welcome To Hot Catering</p>
                  <p className="md:text-[20px] max-md:text-[12px] font-[400] md:mt-[8px] max-md:mt-[2px] md:px-[20%] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas cum libero quia magni expedita, tempora aliquam. Fugit, vitae repudiandae.</p>
                  <Link 
                  href="/booking">
                  <button onClick={handleOpen} className='md:py-[14px] max-md:py-[10px] md:px-[28px] max-md:px-[14px] md:mt-[30px] max-md:mt-[10px]  max-md:text-[16px] bg-[#f5880c] hover:bg-[#FFF] hover:text-[#f5880c] text-[#FFF] md:rounded-[40px] max-md:rounded-[20px]'>
                  Book A Table
                </button>
                  </Link>
                  
                </div>
              </div>
            </div>
        </>
    )
}

export default HeroSection