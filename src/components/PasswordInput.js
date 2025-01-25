import React, { useState, useRef } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef();

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="border border-gray-400 rounded-lg flex items-center justify-between px-3 w-full py-3">
      <span className="flex items-center space-x-1 flex-grow">
        <RiLockPasswordLine className="text-black text-opacity-50" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder={props.placeholder}
          className="outline-none bg-transparent flex-grow"
          ref={passwordInputRef}
        />
      </span>

      <span className="cursor-pointer" onClick={showPasswordHandler}>
        {showPassword ? (
          <FaRegEye className="text-lg" />
        ) : (
          <FaRegEyeSlash className="text-lg" />
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
