import React from "react";
import CardForAuth from "../../components/CardForAuth";
import { PiUser } from "react-icons/pi";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <CardForAuth authHeaderName="Sign-Up">
      <form className="mt-10 flex flex-col space-y-4">
        <div className="border border-gray-400 rounded-lg flex items-center px-3 w-full space-x-1 py-3">
          <PiUser className="text-black text-opacity-50" />
          <input
            type="email"
            placeholder="user / email address"
            className="bg-transparent outline-none flex-grow"
          />
        </div>
        <PasswordInput placeholder="Password" />
        <PasswordInput placeholder="Confirm Password" />

        <Button btnName="Sign-Up"/>

        <aside className="border-t border-gray-400 mt-8 pt-5 text-center">
        <p className="text-gray-600 pb-2">Already have an account?</p>
        <Link to="/login">
          <p className="text-orange-600 font-semibold underline cursor-pointer">
            Login
          </p>
        </Link>
      </aside>

      </form>
    </CardForAuth>
  );
};

export default SignUp;
