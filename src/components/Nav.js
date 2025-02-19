import React, { useState } from "react";
import logo from "../assets/Images/icon.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

   // Define the shaking animation
   const shakeEffect = {
    x: [0, -10, 10, -5, 5, 0], // Shaking movement
    transition: { duration: 0.4 }, // Control speed
  };

  return (
    <main className="">
      <div className="px-6 md:px-12 flex flex-row items-center justify-between py-3">
        <Link to="/">
          <span className="flex flex-row items-center">
            <img src={logo} alt="logo" className="" />
            <h1 className="text-2xl text-orange-600 font-bold">DLHomes</h1>
          </span>
        </Link>

        <span className="hidden md:flex flex-row md:space-x-8 lg:space-x-16">
          <a
            href="/"
            className="hover:text-orange-600 hover:transition-all duration-200 text-black"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:text-orange-600 hover:transition-all duration-200 text-black"
          >
            About
          </a>
          <Link
            to="/favourites"
            className="hover:text-orange-600 hover:transition-all duration-200 text-black"
          >
            Favourites
          </Link>
          <a
            href="/"
            className="hover:text-orange-600 hover:transition-all duration-200 text-black"
          >
            Property
          </a>
          <a
            href="/"
            className="hover:text-orange-600 hover:transition-all duration-200 text-black"
          >
            Blog
          </a>
        </span>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="login">
            <Button btnName="Login" />
          </Link>
        </div>

        <div className="flex md:hidden cursor-pointer">
          {!showMobileNav ? (
            <FaBarsStaggered
              className="text-2xl text-orange-500"
              onClick={handleMobileNav}
            />
          ) : (
            <IoClose
              className="text-3xl text-orange-500"
              onClick={handleMobileNav}
            />
          )}
          {/* <IoClose className="text-3xl text-orange-500"/> */}
        </div>
      </div>

      {showMobileNav && (
          <motion.div
          initial={{ x: "-100%" }}
          animate={showMobileNav ? { x: 0, ...shakeEffect } : { x: "-100%", ...shakeEffect }}
          exit={{ x: "-100%", ...shakeEffect }}
          transition={{ type: "tween", duration: 0.4 }}
          
        >
        <section className="md:hidden px-6 border-t border-gray-300 pt-6 pb-9 z-10 absolute bg-white w-full">
          <div className="flex flex-col space-y-3">
            <a
              href="/"
              className="hover:text-orange-600 hover:transition-all duration-200 text-black"
            >
              Home
            </a>
            <a
              href="/"
              className="hover:text-orange-600 hover:transition-all duration-200 text-black"
            >
              About
            </a>
            <Link
              to="/favourites"
              className="hover:text-orange-600 hover:transition-all duration-200 text-black"
            >
              Favourites
            </Link>
            <a
              href="/"
              className="hover:text-orange-600 hover:transition-all duration-200 text-black"
            >
              Property
            </a>
            <a
              href="/"
              className="hover:text-orange-600 hover:transition-all duration-200 text-black"
            >
              Blog
            </a>
          </div>

          <div className="flex items-center space-x-12 mt-4">
            <Link to="login">
              <Button btnName="Login" />
            </Link>
            <Link to="favourites">
              <FaHeart className="text-red-600 text-3xl" />
            </Link>
          </div>
        </section>
        </motion.div>
      )}
    </main>
  );
};

export default Nav;
