"use client";

import { useState } from "react";
import BookingForm from "../components/booking-form";
import OtherHero from "../components/other-hero";

export default function Booking() {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [qrCode, setQrCode] = useState("");

  const handleBookingSuccess = (data) => {
    setBookingSuccess(true);
    setQrCode(data.qrCode);
  };

  return (
    <div>
      <OtherHero name={"Booking"} />
      <main>
        {!bookingSuccess ? (
          <>
            <BookingForm onBookingSuccess={handleBookingSuccess} />
          </>
        ) : (
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Booking Confirmed!
            </h2>
            <p className="mb-4">Please show this QR code at the entrance:</p>
            {qrCode ? (
              <img src={qrCode} alt="Booking QR Code" className="mx-auto w-40 h-40" />
            ) : (
              <img src="/images/QR_Code.jpg" alt="Booking QR Code" className="mx-auto w-40 h-40" />
            )}
          </div>
        )}
      </main>
    </div>
  );
}
