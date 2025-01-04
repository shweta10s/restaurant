/* eslint-disable @next/next/no-img-element */
"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';

export default function PhoneMenu() {
    const path = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
        name:'Book A Table',
        link:'/booking'
      },
  ]

  return (
    <>
        <button
          className="text-white font-medium text-xl px-3 text-center"
          type="button"
          onClick={toggleDrawer}
        >
           <IoMenuSharp className='text-[#fff]'/>
        </button>

      <div
        id="drawer-example"
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
     <Link
      href="/">
      <img
        src="/images/restaurantlogo.png"
        className="md:h-10 max-md:h-8"
        alt="Logo"
      />
    </Link>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-example"
          className="rounded-lg text-lg w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
        >
          &#10005;
          <span className="sr-only">Close menu</span>
        </button>
        <ul className="text-lg grid gap-2 md:p-0 mt-4 md:flex-row md:mt-0 text-[#667479] ">
      {
        arr.map((ele,i) => (
        <li key={i}>
          <Link
            href={ele.link}
            className={`hover:text-[#f5880c] ${ele.link === path ? "text-[#f5880c]" : "text-white"}`}
            onClick={toggleDrawer}
          >
            {ele.name}
          </Link>
        </li>

        ))
      }
      </ul>
      </div>
    </>
  );
}
