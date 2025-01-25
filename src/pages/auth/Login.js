import React from "react";

import { PiUser } from "react-icons/pi";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import CardForAuth from "../../components/CardForAuth";

const Login = () => {
  return (
    <CardForAuth authHeaderName="Log In">
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

        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-1">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="text-sm">
              Remember Me
            </label>
          </span>
          <p className="text-orange-600 font-semibold underline cursor-pointer text-sm">
            Forgot Password?
          </p>
        </div>

        <Button btnName="Login" />
      </form>

      <aside className="border-t border-gray-400 mt-8 pt-5 text-center">
        <p className="text-gray-600 pb-2">Don't have an account?</p>
        <Link to="/sign-up">
          <p className="text-orange-600 font-semibold underline cursor-pointer">
            Create Account
          </p>
        </Link>
      </aside>
    </CardForAuth>
  );
};

export default Login;
