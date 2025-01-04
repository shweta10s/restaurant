/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OtherHero = ({ name }) => {
    return (
        <>
            <div className="relative md:h-[20vw] max-md:h-[20vh] h-[80vw] text-[#f5880c] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/herosection.jpg"
                        fill
                        alt="Background Image"
                        className="object-cover object-center w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#00000050]" />
                </div>
                <div className="relative max-w-6xl mx-auto z-10 flex flex-col justify-center items-center h-full text-center  max-md:px-4">
                    <div className="font-medium text-center ">
                        <p className="text-[#f5880c] md:text-[60px] max-md:text-[34px] font-[800]">{name}</p>
                       <div className='flex justify-center items-center gap-2'>
                       <Link href="/" >
                            <h1 className='md:text-[24px] max-md:text-[20px] text-[#FFF]'>Home</h1>
                        </Link>
                        <p className='md:text-[24px] max-md:text-[20px]'>{`>>`}</p>
                        
                            <h1 className='md:text-[24px] max-md:text-[20px] text-[#FFF]'>{name}</h1>
                        
                       </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherHero