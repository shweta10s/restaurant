// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//               <p>&copy; 2025 Restaurant Table Booking. All rights reserved.</p>

//     </div>
//   )
// }

// export default Footer

import Link from 'next/link'
import React from 'react'
// import { IoLogoInstagram } from "react-icons/io5";
// import { AiFillFacebook } from "react-icons/ai";
// import { SiTelegram } from "react-icons/si";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { TiLocation } from "react-icons/ti";
import { IoCall } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { RiMailFill } from "react-icons/ri";


const Footer = () => {
    return (
        <div>
            <footer className='footer md:mt-[50px] w-full h-full max-md:mt-[10px] max-md:py-4'>
            <div className='max-w-6xl h-[1px] bg-[#FFF] mx-auto'></div>

                <div className='max-w-6xl md:px-4 max-md:px-6 flex mx-auto md:mt-8 max-md:mt-4'>
                    <div className="w-full h-full flex max-md:flex-col justify-between items-start md:mb-[30px] max-md:gap-[8px]">
                        <div className="col-1 md:w-[50%] flex flex-col md:gap-[10px] max-md:gap-[10px] items-start">
                            <div className="h-full flex">
                                <Link
                                    href="/">
                                    <img
                                        src="/images/restaurantlogo.png"
                                        className="md:h-6 max-md:h-4 md:ml-4 md:my-2 max-md:my-2 max-md:mx-3 scale-[3]"
                                        alt="Logo"
                                    /> 

                                </Link>
                            </div>

                            <h1 className='md:w-[70%] font-[700] md:text-[30px] max-md:text-[22px] text-[#FFF] '>Lorem ipsum dolor sit amet consectetur.</h1>


                        </div>
                        <div className="col-23 grid grid-cols-2 md:mb-[30px] max-md:gap-4 max-md:py-4 md:w-[50%]">
                            <div className="col-2 flex flex-col md:gap-[24px] max-md:gap-[10px] ">
                                <h2 className='text-[#f5880c] font-[600] md:text-[24px] max-md:text-[20px]'>Menu</h2>
                                <div className="menu-cont flex flex-col items-left md:gap-[24px] max-md:gap-[6px]">
                                    <Link href='/' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]'>Home</Link>

                                    <Link href='/about' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]'>About</Link>

                                    <Link href='/reviews' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]'>Reviews</Link>

                                    <Link href='/booking' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]'>Book A Table</Link>
                                </div>
                            </div>
                            <div className="col-3 flex flex-col md:gap-[24px] max-md:gap-[10px]  max-md:mt-4">
                                <h2 className='text-[#f5880c] font-[600] md:text-[24px] max-md:text-[20px]'>Connect with us</h2>
                                <div className="contact-col flex flex-col items-start md:gap-[24px] max-md:gap-[6px]">
                                    <div className='flex gap-4'>
                                        <IoCall className="md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-white rounded-lg" />
                                       <Link href=''>
                                       <p className='text-[#e7e7e7] hover:text-[#FFF] font-[400] md:text-[16px] max-md:text-[14px]'>+91 1234567890</p>
                                       </Link>
                                    </div>
                                    <div className='flex gap-4'>
                                        <RiMailFill className=" md:h-[20px] md:w-[20px]  text-white rounded-lg" />
                                        <Link href='https://mail.google.com/mail/'>
                                        <p className='text-[#e7e7e7] hover:text-[#FFF] font-[400] md:text-[16px] max-md:text-[14px]'>hotcatering@gmail.com</p>
                                        </Link>
                                    </div>
                                    <div className='flex gap-4 '>

                                        <FaLocationDot className=" md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-white rounded-lg " />
                                        <Link href='https://www.google.com/maps/'>
                                        <p className='text-[#e7e7e7] hover:text-[#FFF] font-[400] md:text-[16px] max-md:text-[14px]'>Mumbai, Maharastra</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-6xl h-[1px] bg-[#FFF] mx-auto'></div>
                <div className="copywrite h-full w-full flex items-center justify-center md:mt-[30px] max-md:mt-[10px]">
                    <p className='font-[400] md:text-[16px] max-md:text-[12px] text-[#FFF] text-center'>&copy; 2025 Restaurant Table Booking. All rights reserved.</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer