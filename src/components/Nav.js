import React from "react";
import logo from "../assets/Images/icon.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
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
        <a
          href="/"
          className="hover:text-orange-600 hover:transition-all duration-200 text-black"
        >
          Agents
        </a>
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

      <span>
        <Link to="login">
          <Button btnName="Login" />
        </Link>
      </span>
    </div>
  );
};

export default Nav;
