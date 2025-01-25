import React from "react";
import Button from "../../components/Button";
import headerImg from "../../assets/Images/HeaderImg-removebg-preview.png";
import { RiMenuSearchLine } from "react-icons/ri";
import { HiEye } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";
import { PiSmileyStickerFill } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <section className="flex flex-col space-y-16 lg:flex-row">
        <span className="px-6 lg:px-20 text-center flex flex-col items-center space-y-5 lg:text-start lg:items-start lg:mt-12 lg:space-y-8 lg:w-[60%]">
          <h1 className="text-3xl leading-8 font-semibold text-black text-opacity-90 md:text-5xl">
            Find a perfect property Where you'll love to live
          </h1>
          <p className="text-md w-[90%] md:w-full lg:text-xl">
            We help businesses customize, automate and scale up their ad
            production and delivery
          </p>
          <Link to="all-properties">
            <Button btnName="View All Properties" />
          </Link>
        </span>

        <span className="lg:w-[40%] flex justify-end items-end">
          <img src={headerImg} alt="house" />
        </span>
      </section>

      <section className="mt-12 md:mt-24 mb-6 flex flex-col space-y-4 px-6 md:flex-row md:space-y-0 md:justify-between md:space-x-12 lg:px-20">
        <div className="bg-[#FFE0CE] p-10 rounded-xl flex flex-col items-start ">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Simple & easy way to find your dream home
          </h1>
          <p className="md:mb-16 mb-10">
            Get Started to find your dream home from our wide-range variety of
            homes.
          </p>
          <Link to="login">
            <Button btnName="Get Started" />
          </Link>
        </div>

        <span className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-[#FBEEE6] p-5 rounded-xl flex flex-col space-y-6">
            <RiMenuSearchLine className="text-4xl mx-auto text-orange-500" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Search Location
            </h1>
          </div>
          <div className="bg-[#FBEEE6] p-5 rounded-xl flex flex-col space-y-6">
            <HiEye className="text-4xl mx-auto text-orange-500" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Visit Appointment
            </h1>
          </div>
          <div className="bg-[#FBEEE6] p-5 rounded-xl flex flex-col space-y-6">
            <FaHouseUser className="text-4xl mx-auto text-orange-500" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Get your dream house
            </h1>
          </div>
          <div className="bg-[#FBEEE6] p-5 rounded-xl flex flex-col space-y-6">
            <PiSmileyStickerFill className="text-4xl mx-auto text-orange-500" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Enjoy your appointment
            </h1>
          </div>
        </span>
      </section>

      <section className="flex flex-col space-y-6 py-16 px-10 lg:px-20 bg-[#FFF9F5] md:flex-row md:space-y-0 md:justify-between md:space-x-6">
        <div className="flex flex-col space-y-3 justify-center items-start">
          <span className="p-2 bg-white rounded-full shadow-2xl">
            <CiDollar className="text-5xl text-orange-500" />
          </span>
          <h1 className="text-3xl font-semibold">$15.4M</h1>
          <p className="text-[#3E728A] ">Owned from Properties transaction</p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-start">
          <span className="p-2 bg-white rounded-full shadow-2xl">
            <CiDollar className="text-5xl text-orange-500" />
          </span>
          <h1 className="text-3xl font-semibold">25k+</h1>
          <p className="text-[#3E728A] ">
            Properties for Buy & Sell Successfully
          </p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-start">
          <span className="p-2 bg-white rounded-full shadow-2xl">
            <CiDollar className="text-5xl text-orange-500" />
          </span>
          <h1 className="text-3xl font-semibold">$22M+</h1>
          <p className="text-[#3E728A] ">Revenue generated from DLHomes</p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-start">
          <span className="p-2 bg-white rounded-full shadow-2xl">
            <PiSmileyStickerFill className="text-5xl text-orange-500" />
          </span>
          <h1 className="text-3xl font-semibold">600+</h1>
          <p className="text-[#3E728A] ">Regular Clients.</p>
        </div>
      </section>
    </div>
  );
};

export default Header;
