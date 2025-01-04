"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
// import PhoneNavbarDrawer from './phoneNavbarDrawer';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/slice/popupSlice';
import PhoneMenu from './phoneMenu';
// import Image from 'next/image';

const Navbar = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const handleModalOpen = () => (
    dispatch(openModal())
  )
  const arr = [
    {
      name:'Home',
      link:'/'
    },
    {
      name:'About',
      link:'/about'
    },
    {
      name:'Reviews',
      link:'/reviews'
    },
    {
      name:'Book a Table',
      link:'/booking' 
    },
  ]
  return (
    <nav className="bg-[#171717] z-20 w-full">
  <div className="max-w-6xl xl:px-0 px-2 mx-auto flex flex-wrap items-center justify-between md:py-3 max-md:py-2 max-md:px-4">
    <Link
      href="/">
      <img
        src="/images/restaurantlogo.png"
        className="md:h-6 max-md:h-4 md:ml-6 max-md:pl-4 scale-[3]"
        alt="Logo"
      />
    
    </Link>
    <div
      data-collapse-toggle="navbar-default"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-[24px] text-[#f5880c] rounded-lg md:hidden "
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
     <PhoneMenu />
    </div>
    <div className="w-full max-md:hidden md:block md:w-auto" id="navbar-default">
      <ul className="font-[600] md:text-[18px] flex gap-10 p-4 md:p-0 mt-4 md:flex-row md:mt-0 text-[#fff] ">
      {
        arr.map((ele,i) => (
        <li key={i}>
          <Link
            href={ele.link}
            className={`hover:text-[#f5880c] ${ele.link === path && "text-[#f5880c]"}`}
          >
            {ele.name}
          </Link>
        </li>

        ))
      }
      </ul>
    </div>
      <div className='max-md:hidden'>
      <Link 
      href="/booking">
      <button
        onClick={handleModalOpen}
        className="md:py-[14px] max-md:py-[10px] md:px-[28px] max-md:px-[14px] max-md:text-[16px] bg-[#f5880c] hover:bg-[#FFF] hover:text-[#f5880c] text-[#FFF] md:rounded-[40px] max-md:rounded-[20px]"
        type="button"
      >
         Book A Table
      </button>
      </Link>

      </div>
  </div>
</nav>

  )
}

export default Navbar   