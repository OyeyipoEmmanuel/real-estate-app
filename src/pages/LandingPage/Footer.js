import React from "react";
import logo from "../../assets//Images/icon.png";

const Footer = () => {
  return (
    <main id="footer">
      <section className="mt-24 bg-black px-4 py-16">
        <section className="bg-gray-300 text-center rounded-lg py-12 px-6 w-[80%] mx-auto">
          <h1 className="text-2xl font-semibold pb-2 md:text-6xl">
            For recent Updates, News
          </h1>
          <p className="text-lg">
            We helps businesses customize, automate and scale up their ad
            production and delivery
          </p>

          <form className="flex flex-col items-center justify-center space-y-2 pt-2 md:flex-row md:justify-between md:space-x-6 md:space-y-0">
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-white px-4 py-2 rounded-md w-full outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white w-full py-2 rounded-md hover:bg-opacity-80 duration-200      hover:transition-all md:w-[40%]"
            >
              Subscribe To our newsletter
            </button>
          </form>
        </section>
      </section>

      <section className="px-6 lg:px-20 py-12">
        <div>
          <span className="flex flex-row items-center">
            <img src={logo} alt="logo" className="" />
            <h1 className="text-2xl text-orange-600 font-bold">DLHomes</h1>
          </span>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between mt-6">
          <span className="md:self-center">
            <p>
              59, Bervely Hill Ave, Brooklyn Town, <br/> New York, NY5630, CA, US{" "}
            </p>
            <p>+(123) 456-7890</p>
            <p>info@delhomes.com</p>
          </span>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
            <span>
              <h1 className="font-semibold">Features</h1>
              <ul className="space-y-2">
                <li>Home v1</li>
                <li>Home v2</li>
                <li>About</li>
                <li>Contact</li>
                <li>Search</li>
              </ul>
            </span>

            <span>
              <h1 className="font-semibold">Information</h1>
              <ul className="space-y-2">
                <li>Listing v1</li>
                <li>Listing v2</li>
                <li>Property Details</li>
                <li>Agent List</li>
                <li>Agent Profile</li>
              </ul>
            </span>

            <span>
              <h1 className="font-semibold">Documentation</h1>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>License</li>
              </ul>
            </span>

            <span>
              <h1 className="font-semibold">Others</h1>
              <ul className="space-y-2">
                <li>Login</li>
                <li>Enter OTP </li>
                <li>New Password</li>
                <li>Reset Password</li>
                <li>Create Account</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
