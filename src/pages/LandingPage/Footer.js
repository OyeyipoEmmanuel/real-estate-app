import React from "react";

const Footer = () => {
  return (
    <main className="mt-24 bg-black px-4 py-16">
        <section className="bg-gray-300 text-center rounded-lg p-6">
          <h1 className="text-2xl font-semibold pb-2 md:text-6xl">For recent Updates, News</h1>
          <p className="text-lg">We helps businesses customize, automate and scale up their ad production and delivery</p>
          
          <form className="flex flex-col items-center justify-center space-y-2 pt-2 md:flex-row md:justify-between md:space-x-6 md:space-y-0">
            <input type="email" placeholder="Enter your Email" className="bg-white px-4 py-2 rounded-md w-full outline-none"/>
            <button type="submit" className="bg-black text-white w-full py-2 rounded-md hover:bg-opacity-80 duration-200 hover:transition-all md:w-[30%]">Subscribe To our newsletter</button>
          </form>
        </section>
      
    </main>
  );
};

export default Footer;
