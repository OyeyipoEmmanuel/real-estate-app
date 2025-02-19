import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomes } from "../../../store/fetchHomes";
import HomesCard from "../../../components/HomesCard";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import ErrorToast from "../../../components/ErrorToast";
import Footer from "../../LandingPage/Footer";

const AllHomes = () => {
  const dispatch = useDispatch();
  const {homes, isLoading, error } = useSelector((state) => state.fetchHomes);
  

  useEffect(()=>{
    window.scrollTo(0, 0) 
    
      
    
    
  }, [])

  

  useEffect(()=>{
    if(localStorage.getItem('All_Homes') === null){
      dispatch(fetchHomes());
    }
    
  }, [dispatch])

  const allHomes = JSON.parse(localStorage.getItem('All_Homes')) || []
  
  console.log(localStorage.getItem('All_Homes') === null)

  

  // const homesFromls = localStorage.getItem('ALL_HOMES') !== null ? JSON.parse(localStorage.getItem("ALL_HOMES")) : homes;

  

  

  if (isLoading) {
    console.log("Loading");
  }
  console.log(homes)

  return (
    <React.Fragment>
      <div>
        <h1 className="text-center mb-2 text-3xl md:text-5xl font-semibold">
          Find Property
        </h1>
        <p className="text-center mb-6 md:w-[60%] mx-auto">
          Find a home that suites you and your family. All types are available
          whether a home for rent or a home to buy we have it all.
        </p>
      </div>

      {isLoading && !error && <p className="w-full text-center mx-auto my-12 text-3xl text-orange-500">Loading available homes, Please hold on....</p>}
      <div className="px-6 lg:px-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
        
        {!isLoading && allHomes.length > 0 && (
          allHomes.map((eachHome) => {
            const homeAddress = "2861 62nd Ave, Oakland, CA 94605";
            return (
              <HomesCard
                key={eachHome.id}
                id={eachHome.id}
                homeImage={eachHome.coverPhoto.url}
                homeLocation={homeAddress}
                bedrooms={+eachHome.rooms + 1}
                bathrooms={eachHome.baths}
                area={eachHome.area.toFixed(2)}
                paymentType={eachHome.purpose}
              >
                <div className="flex flex-row justify-between space-x-4 items-center px-2 md:px-8 pt-6">
                  <Link to={`/all-properties/${eachHome.id}`}><Button btnName="View Details" /></Link>
                  <p className="text-xl font-semibold">
                    ${eachHome.price.toLocaleString("en-US")}
                  </p>
                </div>
              </HomesCard>
            );
          })
        )}
        {!isLoading && allHomes.length === 0 && <p className="w-full text-center mx-auto my-12 text-3xl text-orange-500">No homes available</p>}
        {/* {error && <ErrorToast errorMessage="An Error Occured! Try again later"/>} */}
      </div>

      <Footer/>
    </React.Fragment>
  );
};

export default AllHomes;
