// "use client"

// // import Header from '../components/Header';
// // import Footer from '../components/Footer';
// import OtherHero from "../components/other-hero";
// import HomeReview from "../components/review";
// // import HomeAbout from "../components/home-about";


// export default function About() {
//   return (
//     <>
//     <OtherHero name={"Review"} />
//     <HomeReview />
// </>
//   );
// }



// pages/review.js
import React from "react";
// import ReviewSlider from "../components/ReviewSlider";
import OtherHero from "../components/other-hero";
import ReviewSlider from "../components/review";

const ReviewPage = () => {
  return (
    <div>
      <OtherHero name={"Review"} />
      <ReviewSlider />
    </div>
  );
};

export default ReviewPage;
