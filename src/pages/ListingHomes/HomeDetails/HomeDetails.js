import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card";

const HomeDetails = () => {
  const { id } = useParams();

  const { homes } = useSelector((state) => state.fetchHomes);

  console.log(homes);

  const selectedHomeData = homes.find(
    (homeData) => homeData.id === parseInt(id)
  );
  console.log(selectedHomeData);

  // useEffect(() => {
    if (selectedHomeData) {
      localStorage.setItem(
        "selectedHomeData",
        JSON.stringify(selectedHomeData)
      );
    }
  // }, [selectedHomeData]);

  const homeDataFromLs = JSON.parse(localStorage.getItem("selectedHomeData"));

  console.log(selectedHomeData);

  return (
    <main className="mb-12 px-6 lg:px-20 flex flex-col space-y-6 justify-center md:justify-between items-center md:flex-row md:space-y-0 md:space-x-6">
      <div className="">
        <img
          src={homeDataFromLs.coverPhoto.url}
          alt="Featured Home"
          className="w-full h-full rounded-xl md:aspect-auto "
        />
      </div>

      <Card className="p-6 w-full">
        <h1 className="font-semibold md:text-3xl">
          {homeDataFromLs.title}
        </h1>
        <p className="pt-2">2861 62nd Ave, Oakland, CA 94605</p>

        <section className="pt-4 w-full md:flex md:justify-start md:items-center md:space-x-6">
          <div className="border border-black rounded-lg mb-6 md:mb-0 px-8 py-2">
            <h1 className="text-xl font-semibold">
              ${homeDataFromLs.price.toLocaleString("en-US")}
            </h1>
            <p className="text-[12px]">Online / Cash payment</p>
          </div>
          <div className="border border-black border-opacity-30 rounded-md px-8 py-2">
            <h1 className="text-xl font-semibold">
              ${(homeDataFromLs.price / 12).toFixed(2)} / Month
            </h1>
            <p className="text-[12px]">0% EMI for 6 months</p>
          </div>
        </section>

        <div>
          <p className="pt-8 font-semibold md:text-xl">
            {homeDataFromLs.title}
          </p>
          <p className="pt-4 text-sm">
            Discover modern living in this well-designed home that combines
            comfort, style, and security. Equipped with a cutting-edge CCTV
            system and 24/7 security, you’ll have complete peace of mind. The
            spacious interiors feature a functional layout, ample natural light,
            and high-quality finishes, perfect for family living or
            entertaining. Conveniently located in a prime neighborhood with easy
            access to schools, shopping, and transport, this property also
            includes secure parking and a well-maintained outdoor area. A
            perfect choice for those seeking elegance, convenience, and safety
            in their next home
          </p>
        </div>
      </Card>
    </main>
  );
};

export default HomeDetails;
