import React from "react";
import featuredImg from "../../assets/Images/featuredImg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HomesCard from "../../components/HomesCard";
import Button from "../../components/Button";

const DUMMY_VALUES = [
  {
    id: "h1",
    homeImage: featuredImg,
    homeLocation: "2861 62nd Ave, Oakland, CA 94605",
    bedrooms: 3,
    bathrooms: 1,
    area: 1032,
    typeOfPeople: "Family",
    price: 649900,
  },
  {
    id: "h2",
    homeImage: featuredImg,
    homeLocation: "1421 5th Ave, New York City 94605",
    bedrooms: 2,
    bathrooms: 2,
    area: 954,
    typeOfPeople: "Couples",
    price: 128000,
  },
  {
    id: "h3",
    homeImage: featuredImg,
    homeLocation: "2861 62nd Ave, Oakland, CA 94605",
    bedrooms: 1,
    bathrooms: 1,
    area: 648,
    typeOfPeople: "Bachelor",
    price: 96500,
  },
  {
    id: "h4",
    homeImage: featuredImg,
    homeLocation: "2861 62nd Ave, Oakland, CA 94605",
    bedrooms: 4,
    bathrooms: 2,
    area: 1032,
    typeOfPeople: "Family",
    price: 786000,
  },
  {
    id: "h5",
    homeImage: featuredImg,
    homeLocation: "2861 62nd Ave, Oakland, CA 94605",
    bedrooms: 1,
    bathrooms: 1,
    area: 586,
    typeOfPeople: "Bachelor",
    price: 82600,
  },
  {
    id: "h6",
    homeImage: featuredImg,
    homeLocation: "2861 62nd Ave, Oakland, CA 94605",
    bedrooms: 6,
    bathrooms: 6,
    area: 2056,
    typeOfPeople: "Family",
    price: 1086500,
  },
];

const FeaturedHomes = () => {
  const content = DUMMY_VALUES.map((eachHome) => {
    return (
      <HomesCard
        key={eachHome.id}
        homeImage={eachHome.homeImage}
        homeLocation={eachHome.homeLocation}
        bedrooms={eachHome.bedrooms}
        bathrooms={eachHome.bathrooms}
        area={eachHome.area}
        paymentType={eachHome.typeOfPeople}
      >
        <div className="flex flex-row justify-between space-x-4 items-center px-2 md:px-8 pt-6">
          <Button btnName="View Details" />
          <p className="text-xl font-semibold">
            ${eachHome.price.toLocaleString("en-US")}
          </p>
        </div>
      </HomesCard>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between mb-3">
        <h1 className="text-2xl font-semibold md:text-3xl">
          Featured Properties
        </h1>
        <span className="flex items-center space-x-1 text-sm md:text-xl text-orange-500 font-semibold cursor-pointer hover:px-2 hover:text-opacity-80 hover:transition-all duration-300">
          <Link to="all-properties">Explore all </Link>
          <FaArrowRightLong />
        </span>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {content}
      </div>
    </div>
  );
};

export default FeaturedHomes;
