"use client"


// components/ReviewSlider.js
import React, { createContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      feedback: "Amazing service! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Excellent support and quick turnaround.",
    },
    {
      id: 3,
      name: "Michael Brown",
      feedback: "A great experience overall!",
    },
    {
      id: 4,
      name: "John Doe",
      feedback: "Amazing service! Highly recommended.",
    },
    {
      id: 5,
      name: "Jane Smith",
      feedback: "Excellent support and quick turnaround.",
    },
    {
      id: 6,
      name: "Michael Brown",
      feedback: "A great experience overall!",
    },
  ];

  return (
    <div className="review-slider max-w-6xl mx-auto md:px-4 md:h-[50vh] md:mt-10">
      <div className="max-md:mt-5 flex flex-col justify-center items-center  max-w-6xl mx-auto">

        <p className="text-[#fff] font-[500] md:text-[24px] max-md:text-[24px] text-center  max-md:mt-4">
          Review
        </p>
        <p className='text-[#f5880c] text-center md:text-[32px] max-md:text-[12px] md:leading-[28.8px] font-[300]'>The honest review from our client</p>

      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // className='mySwiper w-full max-md:w-[90%] max-md:h-[30vh] md:py-6 max-md:py-4 flex max-md:gap-2 mt-4 max-md:px-4'
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card w-full max-md:w-[90%] md:h-[30vh] max-md:h-[30vh] md:py-6 max-md:py-4 max-md:gap-2 mt-4 flex flex-col justify-center items-center max-md:px-4 bg-[#fff] text-[#000]">
              <p className="feedback">"{review.feedback}"</p>
              <h3 className="name">- {review.name}</h3>
              <div className='flex gap-2 items-center justify-center md:mt-3 max-md:mt-2'>
                   <FaStar className='text-[#FFD43A] md:text-[22px] max-md:text-[18px]' />
                   <FaStar className='text-[#FFD43A] md:text-[22px] max-md:text-[18px]' />
                   <FaStar className='text-[#FFD43A] md:text-[22px] max-md:text-[18px]' />
                   <FaStar className='text-[#FFD43A] md:text-[22px] max-md:text-[18px]' />
                   <FaStar className='text-[#FFD43A] md:text-[22px] max-md:text-[18px]' />
                 </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;


