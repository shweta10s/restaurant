"use client";

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingForm({ onBookingSuccess }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    contact: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("/api/book", formData);
      const response = await axios.post('http://localhost:5000/api/bookings', formData);

      toast.success("Booking Confirmed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      onBookingSuccess(response.data);
    } catch (error) {
      toast.error("Booking Failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Booking failed", error);
    }
  };

  return (
    <div className="pt-8">
      {/* Toaster Container */}
      <ToastContainer />

      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="font-[500] md:text-[24px] max-md:text-[18px] text-center">
          Table Reservation
        </p>
        <p className="md:text-[32px] max-md:text-[24px] text-center font-[500] tracking-tight text-[#f5880c]">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-[40%] h-[200px] md:h-auto flex items-center justify-center">
          <img
            className="h-full w-full max-md:w-[90%] max-md:mx-auto object-cover"
            src="/images/table.jpg"
            alt="Table Reservation"
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[60%] p-6 md:p-10 flex flex-col gap-4"
        >
          {/* Full Name */}
          <input
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f5880c] text-[#000]"
            type="text"
            value={formData.name}
            placeholder="Full Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          {/* Date & Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full md:w-[50%] border border-gray-300 rounded-md px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f5880c] text-[#000]"
              type="date"
              value={formData.date}
               placeholder="DD-MM-YYYY"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />
            <input
              className="w-full md:w-[50%] border border-gray-300 rounded-md px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f5880c] text-[#000]"
              type="time"
              value={formData.time}
               placeholder="00:00"
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              required
            />
          </div>

          {/* Number of Guests */}
          <input
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f5880c] text-[#000] "
            type="number"
            value={formData.guests}
            placeholder="Number of Guests"
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
            required
          />

          {/* Phone Number */}
          <input
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f5880c] text-[#000]"
            type="text"
            value={formData.contact}
            placeholder="Phone Number"
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            required
          />

          {/* Submit Button */}
          <button
            className="w-full bg-[#f5880c] text-white font-semibold py-3 rounded-full hover:bg-white hover:text-[#f5880c] border-2 border-[#f5880c] transition-all"
            type="submit"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
