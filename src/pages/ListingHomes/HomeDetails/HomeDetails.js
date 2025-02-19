import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card";
import Footer from "../../LandingPage/Footer";
import LoadingSpinner from "../../../components/LoadingSpinner";

const HomeDetails = () => {
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const { id } = useParams();

  const allHomes = JSON.parse(localStorage.getItem('All_Homes')) || []

  const selectedHomeData = allHomes.find(
    (homeData) => homeData.id === parseInt(id)
  );
  console.log(selectedHomeData);

  useEffect(()=>{
      window.scrollTo(0, 0) 
    }, [])

  
  if (selectedHomeData) {
    localStorage.setItem("selectedHomeData", JSON.stringify(selectedHomeData));
  }
  

  const homeDataFromLs = JSON.parse(localStorage.getItem("selectedHomeData"));

  console.log(selectedHomeData);

  useEffect(() => {
      setShowLoadingSpinner(true);
      const spin = setTimeout(() => {
        setShowLoadingSpinner(false);
      }, 3000);
  
      return () => clearTimeout(spin);
    }, []);

  return (
    <React.Fragment>
    {showLoadingSpinner && <LoadingSpinner/>}
    {!showLoadingSpinner && <>
    
      <main className="mb-12 px-6 lg:px-20 flex flex-col space-y-6 justify-center md:justify-between md:flex-row md:space-y-0 md:space-x-6">
        <div className="w-full">
          <img
            src={homeDataFromLs.coverPhoto.url}
            alt="Featured Home"
            className="w-full h-full rounded-xl md:aspect-auto  "
          />
        </div>

        <Card className="p-6 w-full">
          <h1 className="font-semibold md:text-3xl">{homeDataFromLs.title}</h1>
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
              spacious interiors feature a functional layout, ample natural
              light, and high-quality finishes, perfect for family living or
              entertaining. Conveniently located in a prime neighborhood with
              easy access to schools, shopping, and transport, this property
              also includes secure parking and a well-maintained outdoor area. A
              perfect choice for those seeking elegance, convenience, and safety
              in their next home
            </p>
          </div>
        </Card>
      </main>

      {/* Home  Highlight*/}
      <div className="mb-12 px-6 lg:px-20 flex flex-col space-y-6 md:flex-row items-center md:justify-between md:space-y-0 md:space-x-8">
        <Card className="p-6 w-full">
          <h1 className="font-semibold text-2xl md:text-4xl">Home Highlight</h1>

          <div className="py-5">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8">
              {homeDataFromLs.amenities.map((amenity) => (
                <li className="list-disc py-1" key={Math.random()}>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Agent infos */}

        <Card className="p-6 w-full self-start">
          <h1 className="font-semibold text-2xl md:text-4xl">
            Agent Information
          </h1>

          <div className="flex items-center justify-between mt-4">
            <img src={homeDataFromLs.ownerAgent.user_image} alt="Agent" className="rounded-xl max-w-[40%] md:w-full" />
            <div className="items-start justify-start">
              <p className="text-center text-sm md:text-lg">⭐⭐⭐⭐⭐</p>
              <h1 className="font-semibold text-xl md:text-3xl text-center">{homeDataFromLs.ownerAgent.name}</h1>
              <p className="text-sm text-center md:text-lg">{homeDataFromLs.phoneNumber.mobile}</p>
            </div>
          </div>
        </Card>
      </div>

      
      
    </>}

    <Footer/>
    </React.Fragment>
  );
};

export default HomeDetails;
