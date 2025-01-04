"use client"

import React from 'react'

import { useState } from 'react';
import axios from 'axios';

export default function BookingForm({ onBookingSuccess }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/book', formData);
      onBookingSuccess(response.data);
    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <div className='md:mt-6'>
<div className="md:mt-10 max-md:mt-5 flex flex-col justify-center items-center">
            <p className="font-[500] md:text-[24px] max-md:text-[18px] text-center">Table Reservation</p>
            <p className="md:text-[32px] max-md:text-[24px] text-center font-[500] tracking-tight text-[#f5880c]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
<div className='max-w-6xl mx-auto bg-[#fff] md:h-[60vh] flex md:mt-4'>
      
<div className='w-[40%] flex justify-center items-center'>
  <img className='h-[90%]' src="/images/table.jpg" alt="" />
</div>
       <form onSubmit={handleSubmit} className=' md:w-[60%] md:mt-4 max-md:mt-2 flex flex-col justify-center items-center gap-4 md:pr-4'> 
       <input
         className='md:w-full border border-[#858587] bg-transparent rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[6px] font-[400] md:text-[16px] max-md:text-[14px] text-[#000] outline-none'  type="text" value={formData.name} placeholder="Full Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <div className='flex justify-between gap-4 md:w-full'>
      <input 
         className='md:w-[50%] border border-[#858587] bg-transparent rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[6px] font-[400] md:text-[16px] max-md:text-[14px] text-[#000] outline-none' 
        type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
        <input
         className='md:w-[50%] border border-[#858587] bg-transparent rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[6px] font-[400] md:text-[16px] max-md:text-[14px] text-[#000] outline-none'  type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} required />
      </div>
        <input
         className='md:w-full border border-[#858587] bg-transparent rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[6px] font-[400] md:text-[16px] max-md:text-[14px] text-[#000] outline-none' 
         type="number" value={formData.guests} placeholder="Number of Guests" onChange={(e) => setFormData({ ...formData, guests: e.target.value })} required />
         
         <input
         className='md:w-full border border-[#858587] bg-transparent rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[6px] font-[400] md:text-[16px] max-md:text-[14px] text-[#000] outline-none'
          type="text" value={formData.contact} placeholder="Phone Number" onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required />
         <button className='border-[#f5880c] md:py-[14px] max-md:py-[12px] md:px-[28px] max-md:px-[14px] w-full bg-[#f5880c] border-2 hover:bg-[#FFF] hover:text-[#f5880c] text-[#FFF] md:text-[16px] max-md:text-[14px] rounded-full md:mt-[20px] flex justify-center items-center gap-2' type="submit">Book Now</button>
      </form>
    </div>
    </div>
  );
}


