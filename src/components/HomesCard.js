import React from "react";
import Card from "./Card";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed, FaShower } from "react-icons/fa";
import { TiArrowMaximise } from "react-icons/ti";
import { FaTags } from "react-icons/fa";


import Button from "./Button";

const HomesCard = (props) => {
  return (
    <Card className="pb-6">
      <section className="flex flex-col space-y-3">
        {/* Image */}
        <img src={props.homeImage} alt={`${props.id} - home image`} className="w-full h-72" />

        {/* Infos */}
        <div className="grid grid-cols-2 gap-4 px-2 md:px-8 font-semibold">
          <span className="col-span-2 row-span-2 flex flex-row space-x-3 items-center">
            <FaLocationDot />
            <p>{props.homeLocation}</p>
          </span>
          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <FaBed />
            <p>{props.bedrooms} Bed Room</p>
          </span>
          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <FaShower />
            <p>{props.bathrooms} Bath Rooms</p>
          </span>
          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <TiArrowMaximise />
            <p>{props.area} sqft</p>
          </span>
          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <FaTags />
            <p className="">{props.paymentType}</p>
          </span>
        </div>

        {props.children}
      </section>
    </Card>
  );
};

export default HomesCard;
