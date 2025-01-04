"use client"

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import BookingForm from '/components/BookingForm';
// import CalendarView from '../components/CalendarView';
import { useState } from 'react';
import BookingForm from '../components/booking-form';
import OtherHero from "../components/other-hero";


export default function Booking() {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [qrCode, setQrCode] = useState('');

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
            <div onDateChange={(date) => console.log(date)} />
            <BookingForm
            onBookingSuccess={handleBookingSuccess} />
          </>
        ) : (
          <div>
            <h2>Booking Confirmed!</h2>
            <img src={qrCode} alt="Booking QR Code" />
          </div>
        )}
      </main>
    </div>
  );
}



// export default function About() {
//   return (
//     <>
//     <OtherHero name={"About"} />
//     <HomeAbout />
// </>
//   );
// }