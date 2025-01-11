import React from "react";
import bestRatedImage from "../../assets/Images/bestImg.png";
import Button from "../../components/Button";

const BestRated = () => {
  return (
    <section className="pt-24 flex flex-col justify-between md:items-center space-y-8 md:flex-row md:space-y-0 md:space-x-16">
      <aside className="md:w-[35%]">
        <img src={bestRatedImage} alt="Best rated" className="md:max-w-[100%] aspect-square"/>
      </aside>
      <div className="md:w-[60%]">
        <h1 className="text-2xl font-semibold pb-4 md:text-4xl">Best rated homes on popular real estate agencies</h1>
        <p className="text-gray-700 md:text-lg">Discover best rated homes from real estate agencies like AdRon Homes, DeLeoHomes, SawelHomes, BingEstate and many more</p>
        <ul className="py-4 px-8 space-y-3 md:text-lg">
            <li className="list-square font-semibold ">Find Excellent Deals</li>
            <li className="list-square font-semibold ">Friendly agents & Fast support</li>
            <li className="list-square font-semibold ">Secure Payment System</li>
        </ul>

        <Button btnName="Learn More"/>
      </div>
    </section>
  );
};

export default BestRated;
