import React from "react";
import Header from "./Header";
import FeaturedHomes from "./FeaturedHomes";
import BestRated from "./BestRated";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="bg-orange-100 pt-16 bg-opacity-30">
      <Header />
      <div className="px-6 lg:px-20">
        <FeaturedHomes />
        <BestRated />
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
