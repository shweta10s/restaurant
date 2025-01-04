"use client";

// components/ReviewSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  const reviews = [
    { id: 1, name: "John Doe", feedback: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Jane Smith", feedback: "Lorem ipsum dolor sit amet." },
    { id: 3, name: "Michael Brown", feedback: "Lorem ipsum dolor sit amet." },
    { id: 4, name: "John Doe", feedback: "Lorem ipsum dolor sit amet." },
    { id: 5, name: "Jane Smith", feedback: "Lorem ipsum dolor sit amet." },
    { id: 6, name: "Michael Brown", feedback: "Lorem ipsum dolor sit amet." },
  ];

  return (
    <div className="review-slider max-w-6xl mx-auto px-4 md:h-[50vh] md:mt-10">
      <div className="mt-5 flex flex-col justify-center items-center max-w-6xl mx-auto">
        <p className="text-[#fff] font-medium md:text-[24px] text-[18px] text-center">
          Review
        </p>
        <p className="md:text-[32px] max-md:text-[24px] text-center font-[500] tracking-tight text-[#f5880c]">
          The honest review from our client
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        loop
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          310: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card w-full md:h-[30vh] h-[28vh] py-6 px-4 mt-4 flex flex-col justify-center items-center bg-[#fff] text-[#000] rounded-lg shadow-md">
              <p className="feedback text-center text-md md:text-base">"{review.feedback}"</p>
              <h3 className="name mt-2 text-md md:text-base font-medium">- {review.name}</h3>
              <div className="flex gap-1 md:gap-2 items-center justify-center mt-3">
                <FaStar className="text-[#FFD43A] text-[20px] md:text-[22px]" />
                <FaStar className="text-[#FFD43A] text-[20px] md:text-[22px]" />
                <FaStar className="text-[#FFD43A] text-[20px] md:text-[22px]" />
                <FaStar className="text-[#FFD43A] text-[20px] md:text-[22px]" />
                <FaStar className="text-[#FFD43A] text-[20px] md:text-[22px]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
