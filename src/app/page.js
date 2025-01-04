// import Image from "next/image";

import BookingForm from "./components/booking-form";
import CalendarView from "./components/calendar-view";
import HeroSection from "./components/hero-section";
import HomeAbout from "./components/home-about";
import HomeReview from "./components/review";
// import BookingForm from '../components/booking-form';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <BookingForm />
      <HomeAbout />
      <HomeReview />
      {/* <BookingForm /> */}
      {/* <CalendarView /> */}
    </div>
  );
}
