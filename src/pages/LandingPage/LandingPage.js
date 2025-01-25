import React from "react";
import Header from "./Header";
import FeaturedHomes from "./FeaturedHomes";
import BestRated from "./BestRated";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
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
