import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";


const HomeAbout = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto md:px-4 md:mt-[50px] max-md:mt-[30px] max-md:px-4">
        <div className="md:mt-10 max-md:mt-5 flex flex-col justify-center items-center">
            <p className="font-[500] md:text-[24px] max-md:text-[18px] text-center">About</p>
            <p className="md:text-[32px] max-md:text-[24px] text-center font-[500] tracking-tight text-[#f5880c]"> 
            Lorem ipsum dolor sit amet.
            </p>
        </div>
    </div>
    <div className='max-w-6xl md:h-30vh mx-auto grid md:grid-cols-2 max-md:px-4'>
<div className='h-full flex justify-center items-center md:py-8 max-md:py-4'>
    <div className='md:w-[500px] max-md:w-[300px] md:h-[400px] max-md:h-[240px] flex relative'>
        <div className='md:w-[450px] max-md:w-[280px] md:h-[360px] max-md:h-[220px] absolute md:rounded-[16px] max-md:rounded-[12px] bottom-0 left-0 bg-[#f5880c] '></div>
        <div className='md:w-[450px] max-md:w-[280px] md:h-[360px] max-md:h-[280px] absolute md:rounded-[16px] max-md:rounded-[12px] top-0 right-0'>
            <img className='object-cover md:rounded-[16px] max-md:rounded-[12px]' fill  src={'/images/About.jpg'} alt='No Preview'/>
        </div>
    </div>
</div>
<div className='h-full md:px-4 md:py-8 max-md:py-4 flex flex-col justify-center items-center'>
    <p className='md:text-[20px] max-md:text-[16px] max-md:text-justify font-[400] text-[#fff] md:leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, odit. Mollitia rem nesciunt dolores sit quod sapiente voluptas, reiciendis maiores.</p>
    <div className='flex md:gap-4 max-md:gap-2 md:mt-4 max-md:mt-2 max-md:ml-4'>
    <IoMdCheckmarkCircle className='text-[#f5880c] md:h-[32px] max-md:h-[40px] md:w-[32px] max-md:w-[40px]' />
        <p className='md:text-[18px] max-md:text-[16px] font-[500] text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
     <div className='flex md:gap-4 max-md:gap-2 md:mt-4 max-md:mt-2 max-md:ml-4'>
     <IoMdCheckmarkCircle className='text-[#f5880c] md:h-[32px] max-md:h-[40px] md:w-[32px] max-md:w-[40px]' />
        <p className='md:text-[18px] max-md:text-[16px] font-[500] text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
</div>

    </div>
    </div>
  )
}

export default HomeAbout