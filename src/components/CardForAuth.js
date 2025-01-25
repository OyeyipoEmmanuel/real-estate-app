import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CardForAuth = (props) => {
  return (
    <main className="flex flex-row items-center justify-center mx-auto w-full md:w-[60%] px-6 lg:px-20 ">
      <section className="border border-gray-400 rounded-lg pt-8 pb-3 px-4 w-full">
        <span className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">{props.authHeaderName}</h1>
          <IoIosCloseCircleOutline className="text-4xl cursor-pointer hover:text-orange-600 hover:transition-all duration-300" />
        </span>
            {props.children}
      </section>
    </main>
  );
};

export default CardForAuth;
